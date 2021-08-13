export default {
  jwt: {
    secret: process.env.APP_SECRET || 'default',
    expiresIn: process.env.SESSION_EXPIRES_IN || 'default',
  },
};
