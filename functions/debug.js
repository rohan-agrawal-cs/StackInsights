// Debug Cloud Function - Test Environment Variables

export default async function handler(req, res) {
    console.log('[DEBUG] Environment variables check');
    
    return res.status(200).json({
      message: 'Environment Variables Debug',
      env: {
        CONTENTSTACK_API_KEY: process.env.VITE_CONTENTSTACK_API_KEY ? 'SET' : 'NOT_SET',
        CONTENTSTACK_DELIVERY_TOKEN: process.env.VITE_CONTENTSTACK_DELIVERY_TOKEN ? 'SET' : 'NOT_SET',
        CONTENTSTACK_ENVIRONMENT: process.env.VITE_CONTENTSTACK_ENVIRONMENT ? 'SET' : 'NOT_SET',
        CONTENTSTACK_REGION: process.env.VITE_CONTENTSTACK_REGION ? 'SET' : 'NOT_SET',
        CONTENTSTACK_MANAGEMENT_TOKEN: process.env.VITE_CONTENTSTACK_MANAGEMENT_TOKEN ? 'SET' : 'NOT_SET',
        CONTENTSTACK_PERSONALIZE_PROJECT_ID: process.env.VITE_CONTENTSTACK_PERSONALIZE_PROJECT_ID ? 'SET' : 'NOT_SET',
        CONTENTSTACK_PERSONALIZE_ENABLED: process.env.VITE_CONTENTSTACK_PERSONALIZE_ENABLED ? 'SET' : 'NOT_SET',
      }
    });
  }
  