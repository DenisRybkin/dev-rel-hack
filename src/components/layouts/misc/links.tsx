import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';

interface ISidebarLink {
  route: string;
  label: string;
  isPrivate?: boolean;
}
export const sidebarLinks: ISidebarLink[] = [
  {
    route: RoutePaths[RouteKeys.BLOG],
    label: 'Блог',
  },
  {
    route: RoutePaths[RouteKeys.RECOMMENDATIONS],
    label: 'Рекомендации',
  },
  {
    route: RoutePaths[RouteKeys.MY_EVENTS],
    label: 'Мои мероприятия',
  },
  {
    route: RoutePaths[RouteKeys.COMMUNITIES],
    label: 'Все сообщества',
  },
  {
    route: RoutePaths[RouteKeys.PARTNERSHIPS],
    label: 'Стать партнером',
  },
  {
    route: RoutePaths[RouteKeys.MY_COMPANY],
    label: 'Моя компания',
  },
  {
    route: RoutePaths[RouteKeys.HEAD_HUNTING],
    label: 'Хед хантинг',
  },
];
