import { defineMessages } from 'react-intl';

export default defineMessages({
  500: {
    id: 'app.containers.api.500',
    defaultMessage: 'Opps something went wrong',
  },
  400: {
    id: 'app.containers.api.400',
    defaultMessage: 'Bad Request',
  },
  401: {
    id: 'app.containers.api.401',
    defaultMessage: 'Invalid or missing token',
  },
  403: {
    id: 'app.containers.api.403',
    defaultMessage: 'Request Forbidden',
  },
  404: {
    id: 'app.containers.api.404',
    defaultMessage: 'Item Not Found',
  },
  405: {
    id: 'app.containers.api.405',
    defaultMessage: 'Method Not Allowed',
  },
  login: {
    id: 'app.containers.App.login',
    defaultMessage: 'Login',
  },
  signIn: {
    id: 'app.containers.App.signIn',
    defaultMessage: 'Sign In',
  },
  faqs: {
    id: 'app.containers.App.faqs',
    defaultMessage: 'FAQs',
  },
  email: {
    id: 'app.containers.App.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.containers.App.password',
    defaultMessage: 'Password',
  },
  forgotPassword: {
    id: 'app.containers.App.forgotPassword',
    defaultMessage: 'Forgot Password',
  },
  emailCannotBeEmpty: {
    id: 'app.containers.App.emailCannotBeEmpty',
    defaultMessage: 'Email cannot be empty!',
  },
  invalidEmail: {
    id: 'app.containers.App.invalidEmail',
    defaultMessage: 'Email format is invalid.',
  },
  passwordAtLeast6Character: {
    id: 'app.containers.App.passwordAtLeast6Character',
    defaultMessage: 'Password at least 6 characters',
  },
});
