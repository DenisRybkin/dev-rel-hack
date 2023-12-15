import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { FiAward, FiUsers } from 'react-icons/fi';
import { Button } from '@components/ui/button';

const CompanyHeader = () => {
  return (
    <div>
      <div className='flex items-center gap-x-6'>
        <Avatar className='h-[284px] w-[284px] rounded-lg'>
          <AvatarImage/>
          <AvatarFallback>
            <AvatarImage/>
            <AvatarFallback><div className='w-full h-full bg-emerald-500'></div></AvatarFallback>
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-between h-[284px]'>
          <div>
            <div className='text-[30px] font-semibold'>Open Solutions</div>
            <div className='text-[16px] mt-1'>Наша команда обладает большим опытом в разработке комплексных решений, включая Web и мобильные приложения, серверы, облачные сервисы и т.д.</div>
          </div>
          <div className='w-full'>
            <div className='flex items-center w-1/2 justify-between'>
              <div className='flex items-center gap-x-2'>
                <FiUsers size={24}/>
                <div className='text-blue text-[14px] font-medium'>12 участников</div>
              </div>
              <div className='flex items-center gap-x-2'>
                <FiAward size={24}/>
                <div className='text-blue text-[14px] font-medium'>12 мероприятий</div>
              </div>
            </div>
            <Button variant='primary' className='w-1/2 mt-4'>Подписаться</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;