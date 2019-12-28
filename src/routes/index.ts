import { RouterItem } from 'types';
import About from 'pages/About';
import Portfolio from 'pages/Portfolio';
import Resume from 'pages/Resume';

const routes: RouterItem[] = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    component: Resume
  }
];

export default routes;