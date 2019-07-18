import envConfig from 'config/environment';

const { host } = envConfig.api;

/*
 * POST
 * User Login
 */
export const postUserLoginURL = () => `${host}/v1/auth/login`;

/*
 * POST
 * User Logout
 */
export const postUserLogoutURL = () => `${host}/v1/auth/logout`;

/*
 * GET
 * User info
 */
export const getUserInfoURL = () => `${host}/v1/user/info`;

/*
 * POST
 * Refresh token
 */
export const postRefreshToken = () => `${host}/v1/auth/refresh-token`;
