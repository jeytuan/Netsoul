// pages/api/auth/callback.js
import auth0 from '../../../src/utils/auth0';

export default async function callback(req, res) {
  try {
    console.log("Handling Auth0 callback...");
    await auth0.handleCallback(req, res, { redirectTo: '/realm' });
    console.log("Redirecting to /realm...");
  } catch (error) {
    console.error('Callback error:', error);
    res.status(error.status || 500).end(error.message);
  }
}
