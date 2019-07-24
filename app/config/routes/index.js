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
  admin: {
    index: '/admin',
    users: {
      index: '/admin/users',
      list: '/admin/users',
      add: '/admin/users/add',
      edit: '/admin/users/edit/:id',
    },
    userLog: '/admin/logs-user',
    userLogTracking: '/admin/logs-user-tracking',
    systemLog: '/admin/logs-system',
    tourGuide: '/admin/tour-guide',
  },
};

export const publicPaths = [routes.login];

export const cannotViewIfLoggedInPaths = [routes.login, routes.forgotPassword];
