import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HanddlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handdlebars: HanddlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handdlebars,
);
