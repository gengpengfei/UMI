import { defineConfig } from 'umi';
import Routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: Routes,
  fastRefresh: {},
});
