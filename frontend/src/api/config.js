const url = 'myApi.com';
const localhost = 'http://localhost:4200/'
const myApi = process.env.__DEV__ ? localhost : process.env.__API__

export default () => {
  console.log(myApi);
}
