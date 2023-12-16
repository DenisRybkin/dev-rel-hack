import { useContext, useEffect, useMemo, useState } from 'react';
import { IProviderProps } from '@app/providers/i-provider-props';
import { api } from '@lib/api/plugins';
import { User } from '@lib/api/models';
import { PreloaderContext } from '@app/providers/preloader';
import { AuthContext } from '@app/providers/auth/auth-context';
import { LocalStorageKeys, QueryKeys } from '@lib/constants';
import { useQuery } from '@tanstack/react-query';
import { AuthDialog } from '@components/entities/auth/dialogs';
import { AuthStrategyType } from '@components/entities/auth/dialogs/auth-dialog';
import { TokenDto } from '@lib/api/models2';

export const AuthProvider = (props: IProviderProps) => {
  const preloader = useContext(PreloaderContext);

  const [user, setUser] = useState<TokenDto | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<string | undefined>(
    localStorage.getItem(LocalStorageKeys.JWT) ?? undefined
  );
  const [isOpenAuthDialog, setIsOpenAuthDialog] = useState<boolean>(false);
  const [authDialogType, setAuthDialogType] = useState<
    AuthStrategyType | undefined
  >('login');

  const handleSuccess = (user: TokenDto) => setUser(user);

  const handleError = () => {
    localStorage.removeItem(LocalStorageKeys.JWT);
    handleSetAccessToken(undefined);
  };

  const { isLoading, isFetching } = useQuery({
    queryFn: async () => await api.account.getMe(handleSuccess, handleError),
    enabled: !user && !!accessToken,
    onSuccess: handleSuccess,
  });

  console.log(!user && !!accessToken);

  const isAuth = useMemo(
    () =>
      !!(accessToken ?? localStorage.getItem(LocalStorageKeys.JWT)) && !!user,
    [accessToken, user]
  );

  const role = useMemo(() => undefined, [user]);
  const handleSetAccessToken = (token?: string) => {
    setAccessToken(token);
    if (!token) localStorage.removeItem(LocalStorageKeys.JWT);
  };

  const handleOpenAuthDialog = (type?: AuthStrategyType) => {
    if (type) setAuthDialogType(type);
    setIsOpenAuthDialog(true);
  };

  useEffect(() => {
    preloader.setVisible(isFetching);
  }, [isFetching]);

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuth,
          setUser,
          user,
          accessToken,
          role,
          setAccessToken: handleSetAccessToken,
          openAuthDialog: handleOpenAuthDialog,
        }}
      > 
        <AuthDialog
          isOpen={isOpenAuthDialog}
          onOpenChange={open => {
            if (!open) setAuthDialogType(undefined);
            setIsOpenAuthDialog(open);
          }}
          strategy={authDialogType}
        />
        {props.children}
      </AuthContext.Provider>
    </>
  );
};
