/**
 * Re-export all api config for easy import
 */
import * as user from './user';

const apiUrl = {
  ...user,
};

export default apiUrl;
