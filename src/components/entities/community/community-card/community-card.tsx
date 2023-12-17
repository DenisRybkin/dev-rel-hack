import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { FiAward, FiUsers } from 'react-icons/fi';
import { Button } from '@components/ui/button';

interface ICommunityCardProps {
  className?: string;
  title?:string;
  url?:string;
  onClick?:()=>void
}

const CommunityCard = ({title='',url=''}:ICommunityCardProps) => {
  
  return (
      <div className='h-[240px] w-[31%] bg-white rounded-lg p-6'>
        <div className='flex items-center gap-x-4'>
          <Avatar className="h-[106px] w-[106px] rounded-lg">
            <AvatarImage src={url}/>
            <AvatarFallback>
              <div className="w-full h-full bg-emerald-500"></div>
            </AvatarFallback>
          </Avatar>
          <div>
            <div className='text-[25px] font-semibold'>{title}</div>
            <div className='text-[12px] font-normal'>Наша команда обладает большим опытом в разработке комплексных решений, включая Web и т.д.</div>
          </div>
        </div>
        <div className='flex items-center gap-x-6 my-4'>
          <div className='flex items-center gap-x-2'>
            <FiUsers size={24}/>
            <div className='text-blue text-[14px] font-medium'>12 участников</div>
          </div>
          <div className='flex items-center gap-x-2'>
            <FiAward size={24}/>
            <div className='text-blue text-[14px] font-medium'>12 мероприятий</div>
          </div>
        </div>
        <Button variant='primary' className='w-full'>Подписаться</Button>
      </div>
  );
};

export default CommunityCard;