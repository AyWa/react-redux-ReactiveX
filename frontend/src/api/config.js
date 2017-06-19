const localhost = 'http://localhost:4200/'
export const myApi = process.env.__DEV__ ? localhost : process.env.__API__
export default myApi
