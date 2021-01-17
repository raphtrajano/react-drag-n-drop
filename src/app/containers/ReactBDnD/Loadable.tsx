/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const ReactBDnD = lazyLoad(
  () => import('./index'),
  module => module.ReactBDnD,
);
