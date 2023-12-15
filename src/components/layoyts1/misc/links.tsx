import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';

interface ISidebarLink {
  route: string;
  label: string;
  isPrivate?: boolean;
}
export const sidebarLinks: ISidebarLink[] = [
  {
    route: RoutePaths[RouteKeys.HOME],
    label: 'Моя страница',
  },
  {
    route: RoutePaths[RouteKeys.LATEST],
    label: 'Блог',
  },
  {
    route: RoutePaths[RouteKeys.SUBSCRIPTIONS],
    label: 'Рекомендации',
    isPrivate: true,
  },
  {
    route: RoutePaths[RouteKeys.COMPANY],
    label: 'Мои мероприятия',
  },
  {
    route: RoutePaths[RouteKeys.VACANCY],
    label: 'Отложенные',
  },
  {
    route: RoutePaths[RouteKeys.USER],
    label: 'Стать партнером',
  },
];
