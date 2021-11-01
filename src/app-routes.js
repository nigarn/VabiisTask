import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, SturucturePage, ProfilePage } from './pages';

const routes = [
  {
    path: '/sturucture',
    component: SturucturePage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
