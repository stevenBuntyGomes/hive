export const API = process.env.PRODUCTION ? 'https://hive.fexdvers.com/api' : process.env.API_DEVELOPMENT;
export const APP_NAME = process.env.APP_NAME;
export const DOMAIN = process.env.PRODUCTION ? process.env.DOMAIN_PRODUCTION : process.env.DOMAIN_DEVELOPMENT;
export const ABOUT_IMAGE_URL = 'https://hive.fexdvers.com/uploads/about_photos/';
export const BRAND_IMAGE_URL = 'http://hive.fexdvers.com/uploads/brand_photos/';
export const PRICE_IMAGE_URL = 'http://hive.fexdvers.com/uploads/price_photos/';
export const SERVICE_IMAGE_URL = 'http://hive.fexdvers.com/uploads/service_photos/';