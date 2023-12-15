import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { IProviderProps } from '@app/providers/i-provider-props';

import { MetaContext } from '@app/providers/meta/meta-context';
import { useLocation } from 'react-router-dom';
import { RouteKeys } from '@lib/constants';
import { RoutePaths } from '@app/router';

const routsWithDefaultTitle = [
  RoutePaths[RouteKeys.BLOG],
  RoutePaths[RouteKeys.PARTNERSHIPS],
  RoutePaths[RouteKeys.COMMUNITIES],
  RoutePaths[RouteKeys.MY_EVENTS],
  RoutePaths[RouteKeys.DEFERRED_EVENTS],
  RoutePaths[RouteKeys.RECOMMENDATIONS],
  RoutePaths[RouteKeys.MYCOMPANY]
];

export const MetaProvider = (props: IProviderProps) => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>(import.meta.env.VITE_APP_TITLE);

  useEffect(() => {
    if (routsWithDefaultTitle.includes(pathname))
      setTitle(import.meta.env.VITE_APP_TITLE);
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
