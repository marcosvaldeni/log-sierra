export default {
  jwt: {
    secret: String(process.env.APP_SECRET),
    expiresIn: String(process.env.SESSION_EXPIRES_IN) || '1d'
  },
};
