interface IMailConfig {
  driver: 'ethereal';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'contact@marcosvaldeni.dev',
      name: 'Team GoBarber',
    },
  },
} as IMailConfig;
