const localhost = 'http://api.githunt.com'
export const myApi = process.env.__DEV__ ? localhost : process.env.__API__
export default myApi
