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
    tourGuide: {
      index: '/admin/tour-guide',
      list: '/admin/tour-guide',
      add: '/admin/tour-guide/add',
      edit: '/admin/tour-guide/edit/:id',
    },
    logs: {
      userLogs: 'admin/log-user',
      userLogsTracking: 'admin/logs-user-tracking',
      systemLogs: 'admin/logs-system',
    },
    userLogTracking: '/admin/logs-user-tracking',
    systemLog: '/admin/logs-system',
  },
};

export const publicPaths = [routes.login];

export const cannotViewIfLoggedInPaths = [routes.login, routes.forgotPassword];
