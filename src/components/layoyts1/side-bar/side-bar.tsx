import React, { useContext } from 'react';
import { cn } from '@lib/utils/tools';
import { sidebarLinks } from '@components/layoyts1/misc/links';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@app/providers/auth';
import { FiPlus } from 'react-icons/fi';



export const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const authContext = useContext(AuthContext);

  const handleClickLink = (route: string) => () => navigate(route);

  return (
    <div className="flex h-full w-[438px] gap-6">
      <div className='flex bg-white flex-col items-start rounded-lg p-5 h-full bg-white w-[308px]'>
        {sidebarLinks.map(link => {
          if (link.isPrivate && !authContext.isAuth) return null;
          const isActive = pathname == link.route;
          return (
            <div
              key={link.label}
              onClick={handleClickLink(link.route)}
              className={cn(
                'p-2 hover:bg-light'
              )}
            >
              <p className="text-black">{(link.label)}</p>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col bg-white w-[106px] rounded-lg h-full p-7 gap-4'>
        <div className="rounded-full border-1 border-gray p-3 flex items-center justify-center">
          <FiPlus className="text-gray" size={24}  />
        </div>
      </div>
    </div>
  );
};