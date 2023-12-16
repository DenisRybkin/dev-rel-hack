import React, { useContext, useState } from 'react';
import { cn } from '@lib/utils/tools';
import { sidebarLinks } from '@components/layouts/misc/links';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@app/providers/auth';
import { FiPlus } from 'react-icons/fi';
import { CreateCompanyDialog } from '@components/entities/company/create-company-dialog/create-company-dialog';
import { toast } from '@components/ui/use-toast';
import { useQuery } from '@tanstack/react-query';
import { api } from '@lib/api/plugins';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';

export const SideBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isOpenCreateCompanyDialog, setIsOpenCreateCompanyDialog] =
    useState<boolean>(false);

  const handleOpenCreateCompanyDialog = () =>
    authContext.isAuth
      ? setIsOpenCreateCompanyDialog(true)
      : authContext.openAuthDialog('login');

  const handleClickLink = (route: string) => () => navigate(route);

  const handleError = () =>
    toast({ variant: 'destructive', title: t('toast:error.default') });

  const companies = useQuery({
    queryKey: [api.company.toString()],
    queryFn: () => api.company.getAll(undefined, handleError),
  });

  console.log(companies);

  return (
    <>
      <CreateCompanyDialog
        isOpen={isOpenCreateCompanyDialog}
        onOpenChange={setIsOpenCreateCompanyDialog}
      />
      <div className="flex h-full w-[438px] gap-6">
        <div className="flex bg-white flex-col items-start rounded-lg p-5 h-full bg-white w-[308px]">
          {sidebarLinks.map(link => {
            if (link.isPrivate && !authContext.isAuth) return null;
            return (
              <div
                key={link.label}
                onClick={handleClickLink(link.route)}
                className={cn(
                  'p-2 w-full text-base-medium cursor-pointer rounded-lg hover:bg-light'
                )}
              >
                <p className="text-black text-base-medium">{link.label}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col bg-white w-[106px] rounded-lg h-full p-7 gap-4 overflow-y-auto">
          <div
            onClick={handleOpenCreateCompanyDialog}
            className="rounded-full border-2 border-gray p-3 flex items-center justify-center"
          >
            <FiPlus className="text-gray" size={24} />
          </div>
          {companies.data?.map(item => (
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={item.avatar?.url} />
                <AvatarFallback />
              </Avatar>
              <p className="whitespace-wrap text-black text-subtle-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
