/**
 * All available routes
 */

export const routes = {
  index: '/',
  login: '/login',
  logout: '/logout',
  forgotPassword: '/forgot-password',
  resetPassword: '/reset-password',
  accessDenied: '/access-denied',
  faqs: '/faqs',
};

export const publicPaths = [routes.login];

export const cannotViewIfLoggedInPaths = [routes.login, routes.forgotPassword];
