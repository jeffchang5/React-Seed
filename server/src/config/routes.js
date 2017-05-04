/**
 * Created by jeffreychang on 5/3/17.
 */
import path from 'path';
export default {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: path.resolve('./dist/public') },
  },
};