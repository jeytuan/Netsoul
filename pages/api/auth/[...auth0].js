// pages/api/auth/[...auth0].js

import auth0 from '../../../utils/auth0';

export default async function handler(req, res) {
  try {
    await auth0.handleAuth(req, res);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
