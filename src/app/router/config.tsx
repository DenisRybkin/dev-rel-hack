import { RouteProps } from 'react-router-dom';
import { Role } from '@lib/api/models';
import { RouteKeys } from '@lib/constants';
import BlogPage from '@components/pages/blog/blog-page';
import CompanyPage from '@components/pages/company/company-page';
import CommunityPage from '@components/pages/communities/community-page';

export type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  requiredRole?: Role;
};

export const RoutePaths: Record<RouteKeys, string> = {
  [RouteKeys.BLOG]: '/',
  [RouteKeys.COMMUNITIES]: '/communities',
  [RouteKeys.DEFERRED_EVENTS]: '/deferred-events',
  [RouteKeys.MY_EVENTS]: '/my-events',
  [RouteKeys.PARTNERSHIPS]: '/partnerships',
  [RouteKeys.RECOMMENDATIONS]: '/recommendations',
  [RouteKeys.MY_COMPANY]: '/my-company',
};

export const routerConfig: RoutePropsType[] = [
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.BLOG],
    element: <BlogPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.MY_EVENTS],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COMMUNITIES],
    element: <CommunityPage/>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.PARTNERSHIPS],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.DEFERRED_EVENTS],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.RECOMMENDATIONS],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.MY_COMPANY],
    element: <CompanyPage />,
  },
];
