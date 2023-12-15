import { createContext } from 'react';
import { LocalStorageKeys } from '@lib/constants';
import { Role, User } from '@lib/api/models';
import { AuthStrategyType } from '@components/entities/auth/dialogs/auth-dialog';
import { TokenDto } from '@lib/api/models2';

interface IAuthContext {
  isAuth?: boolean;
  accessToken?: string;
  setAccessToken: (token?: string) => void;
  role?: Role;
  user?: TokenDto;
  setUser: (user?: TokenDto) => void;
  openAuthDialog: (type: AuthStrategyType) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  accessToken: localStorage.getItem(LocalStorageKeys.JWT) ?? undefined,
  setAccessToken: () => {},
  setUser: () => {},
  openAuthDialog: () => {},
});
