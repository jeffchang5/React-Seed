/**
 * Created by jeffreychang on 5/3/17.
 */
import path from 'path';

export default {
  production: {},
  test: {
    PORT: 8080,
    HOST: '0.0.0.0',
  },
};
export const Path = () => {
  return path.resolve('.');
};
// console.log(path.resolve('.'));
// export const { Path } = path.resolve('.');
export { Routes } from './routes';