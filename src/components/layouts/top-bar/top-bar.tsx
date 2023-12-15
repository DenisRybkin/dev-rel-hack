import { useContext } from 'react';
import { Avatar, AvatarImage } from '@components/ui/avatar';
import { FiBell } from 'react-icons/fi';
import { Button } from '@components/ui/button';
import { MetaContext } from '@app/providers/meta';
import { AuthContext } from '@app/providers/auth';
import Logo from '@assets/images/logo-light.svg';

interface ITopBarProps {}

export const TopBar = (props: ITopBarProps) => {
  const authContext = useContext(AuthContext);
  const { title } = useContext(MetaContext);

  return (
    <>
      <div className="w-full flex items-center gap-6">
        <div className="w-[438px] h-16 bg-white p-2 rounded-lg flex">
          <img src={Logo} alt="" />
        </div>
        <div className="flex-1 bg-white h-20 rounded-lg text-black flex items-center px-6">
          {title && <h1 className="text-black text-base-semibold">{title}</h1>}
        </div>
        <div
          className={`w-[434px] ${
            authContext.isAuth ? 'bg-slate' : 'bg-white'
          } rounded-lg px-6 flex justify-between py-2`}
        >
          {authContext.isAuth ? (
            <>
              <div className="h-16 w-16 bg-white rounded-lg flex items-center justify-center">
                <FiBell color="black" size={24} />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <h3 className="text-black text-body-medium">
                    {authContext.user?.first_name} {authContext.user?.last_name}
                  </h3>
                  <span className="text-gray text-body-medium">Дизайнер</span>
                </div>
                <Avatar className="rounded-lg h-16 w-16">
                  <AvatarImage
                    className="rounded-lg h-16 w-16 "
                    src="https://avatars.mds.yandex.net/i?id=de0498177b5eeeddfd228406bcfbb9a8d020384e-10932700-images-thumbs&n=13"
                  />
                </Avatar>
              </div>
            </>
          ) : (
            <div className="h-16 w-full flex items-center gap-x-5">
              <Button
                className="w-1/2"
                onClick={() => authContext.openAuthDialog('login')}
              >
                Вход
              </Button>
              <Button
                className="w-1/2"
                variant="primary"
                onClick={() => authContext.openAuthDialog('registration')}
              >
                Регистрация
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
