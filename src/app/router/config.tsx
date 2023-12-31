import { RouteProps } from 'react-router-dom';
import { Role } from '@lib/api/models';
import { RouteKeys } from '@lib/constants';
import MyEventsPage from '@components/pages/my-events/my-events-page';
import CompanyPage from '@components/pages/company/company-page';
import CommunityPage from '@components/pages/communities/community-page';
import LkPage from '@/components/pages/lk/lk-page';
import HeadHuntingPage from '@/components/pages/head-hunting/head-hunting-page';
import { EventPage } from '@/components/pages/event/event-page';
import { BlogPage } from '@/components/pages/blog/blog-page';

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
  [RouteKeys.LK]: '/lk',
  [RouteKeys.HEAD_HUNTING]: '/head-hunting',
  [RouteKeys.EVENT]: '/event/:id',
};

export const routerConfig: RoutePropsType[] = [
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.BLOG],
    element: <BlogPage/>
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.MY_EVENTS],
    element: <MyEventsPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.COMMUNITIES],
    element: <CommunityPage />,
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
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.LK],
    element: <LkPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.HEAD_HUNTING],
    element: <HeadHuntingPage />,
  },
  {
    isPrivate: false,
    path: RoutePaths[RouteKeys.EVENT],
    element: <EventPage />,
  },
];
