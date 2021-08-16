export default {
  jwt: {
    secret: String(process.env.APP_SECRET),
    expiresIn: '1d',
  },
};
