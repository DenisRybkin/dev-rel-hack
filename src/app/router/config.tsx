import { RouteProps } from 'react-router-dom';
import { Role } from '@lib/api/models';
import { RouteKeys } from '@lib/constants';

export type RoutePropsType = RouteProps & {
  isPrivate: boolean;
  requiredRole?: Role;
};

export const RoutePaths = {
  [RouteKeys.BLOG]: '/',
  [RouteKeys.COMMUNITIES]: '/communities',
  [RouteKeys.DEFERRED_EVENTS]: '/deferred-events',
  [RouteKeys.MY_EVENTS]: '/my-events',
  [RouteKeys.PARTNERSHIPS]: '/partnerships',
  [RouteKeys.RECOMMENDATIONS]: '/recommendations',
};

export const routerConfig: RoutePropsType[] = [
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.BLOG],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.MY_EVENTS],
    element: <div></div>,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COMMUNITIES],
    element: <div></div>,
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
  }
];
