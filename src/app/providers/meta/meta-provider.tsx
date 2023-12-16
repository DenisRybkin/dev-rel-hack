import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { IProviderProps } from '@app/providers/i-provider-props';

import { MetaContext } from '@app/providers/meta/meta-context';
import { useLocation } from 'react-router-dom';
import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';

const pageTitles = {
  [RoutePaths[RouteKeys.BLOG]]: 'Блог',
  [RoutePaths[RouteKeys.PARTNERSHIPS]]: 'Партнёрство',
  [RoutePaths[RouteKeys.COMMUNITIES]]: 'Сообщества',
  [RoutePaths[RouteKeys.MY_EVENTS]]: 'Мои события',
  [RoutePaths[RouteKeys.DEFERRED_EVENTS]]: 'Оложенные события',
  [RoutePaths[RouteKeys.RECOMMENDATIONS]]: 'Рекомендации',
  [RoutePaths[RouteKeys.MY_COMPANY]]: 'Моя компания',
  [RoutePaths[RouteKeys.HEAD_HUNTING]]: 'Хед Хантинг',
};

export const MetaProvider = (props: IProviderProps) => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (Object.keys(pageTitles).includes(pathname))
      setTitle(
        Object.entries(pageTitles).find(item => item[0] == pathname)?.[1]
      );
  }, [pathname]);

  return (
    <MetaContext.Provider value={{ title, setTitle }}>
      <Helmet>
        <title>{title ?? import.meta.env.VITE_APP_TITLE}</title>
      </Helmet>
      {props.children}
    </MetaContext.Provider>
  );
};
