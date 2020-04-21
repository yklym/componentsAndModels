const isProd = process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production';
export const apiLink = (isProd ? '' : `http://localhost:${process.env.PORT || 12000}`) + '/api';
console.log(apiLink);