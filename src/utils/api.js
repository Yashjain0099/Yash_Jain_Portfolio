/**
 * API Helper for Hugging Face Gradio Backend
 * Production-ready version with error handling
 */

// Get API URL from environment or fallback
const API_BASE_URL = process.env.VITE_API_URL || 
                     process.env.NEXT_PUBLIC_API_URL ||
                     'https://Yashuu-Yash-s_bot.hf.space';

console.log('🔗 API URL:', API_BASE_URL);

/**
 * Send chat message to HF Gradio backend
 */
export const sendChatMessage = async (message, topK = 3) => {
  try {
    // Validate input
    if (!message || typeof message !== 'string') {
      throw new Error('Invalid message');
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length === 0) {
      throw new Error('Message cannot be empty');
    }

    if (trimmedMessage.length > 500) {
      throw new Error('Message too long (max 500 characters)');
    }

    // Call Gradio API
    const response = await fetch(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [trimmedMessage, topK]
      }),
      // Add timeout
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });

    if (!response.ok) {
      // Try to get error details
      const errorText = await response.text().catch(() => '');
      throw new Error(`API Error (${response.status}): ${errorText || 'Unknown error'}`);
    }

    const result = await response.json();
    
    // Parse Gradio response
    if (!result.data) {
      throw new Error('Invalid response format from API');
    }

    // Handle both object and string responses
    let parsedData;
    if (typeof result.data === 'string') {
      try {
        parsedData = JSON.parse(result.data);
      } catch {
        parsedData = { answer: result.data, sources: [] };
      }
    } else {
      parsedData = result.data;
    }

    return {
      answer: parsedData.answer || parsedData || 'No response',
      sources: parsedData.sources || []
    };

  } catch (error) {
    console.error('❌ API Error:', error);
    
    // Provide user-friendly error messages
    if (error.name === 'AbortError' || error.name === 'TimeoutError') {
      throw new Error('Request timed out. The chatbot might be starting up (takes ~30 seconds on first load). Please try again!');
    }
    
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Cannot connect to chatbot. Please check your internet connection.');
    }
    
    throw error;
  }
};

/**
 * Check if HF Space is healthy and running
 */
export const checkHealth = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`${API_BASE_URL}/`, {
      method: 'HEAD',
      signal: controller.signal,
      cache: 'no-cache'
    });

    clearTimeout(timeoutId);
    return response.ok;
    
  } catch (error) {
    console.warn('Health check failed:', error);
    return false;
  }
};

/**
 * Warm up the Space (call on app load to reduce first message delay)
 */
export const warmUpSpace = async () => {
  try {
    console.log('🔥 Warming up chatbot...');
    
    await sendChatMessage('Hello', 1);
    
    console.log('✅ Chatbot warmed up');
    return true;
  } catch (error) {
    console.warn('Warm-up failed (this is okay):', error);
    return false;
  }
};

/**
 * Rate limiter to prevent spam
 */
export class RateLimiter {
  constructor(maxRequests = 10, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }

  canMakeRequest() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    
    return false;
  }

  getTimeUntilNextRequest() {
    if (this.requests.length < this.maxRequests) return 0;
    
    const oldestRequest = Math.min(...this.requests);
    const waitTime = this.windowMs - (Date.now() - oldestRequest);
    return Math.max(0, waitTime);
  }

  reset() {
    this.requests = [];
  }
}

// Singleton rate limiter instance
export const chatRateLimiter = new RateLimiter(15, 60000); // 15 messages per minute

/**
 * Retry failed requests with exponential backoff
 */
export const retryWithBackoff = async (fn, maxRetries = 3) => {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      const isLastAttempt = attempt === maxRetries - 1;
      
      if (isLastAttempt) {
        throw error;
      }

      // Exponential backoff: 1s, 2s, 4s
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`Retry attempt ${attempt + 1}/${maxRetries} after ${delay}ms`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

/**
 * Get API configuration info
 */
export const getAPIInfo = () => {
  return {
    url: API_BASE_URL,
    isProduction: process.env.NODE_ENV === 'production',
    version: '1.0.0'
  };
};

// Export API URL for other components
export { API_BASE_URL };