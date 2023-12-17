import React from 'react';
import { cn } from '@lib/utils/tools';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Badge } from '@components/ui/badge';
import { FiHeart } from 'react-icons/fi';

interface IEventCardProps {
  className?: string;
  title?:string;
  onClick?:()=>void
}

const EventCard = ({ className,title="DevRel",onClick  }: IEventCardProps) => {
  return (
    <div className={cn('w-full h-[289px] gap-x-6 flex items-start', className)} onClick={onClick}>
      <div className="w-1/2 h-full bg-emerald-500 min-w-[50%] relative rounded-lg">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded absolute right-2 top-2">
          <FiHeart size={24} />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-2">
          <Avatar className="h-[48px] w-[48px] rounded-full">
            <AvatarImage />
            <AvatarFallback>
              <div className="w-full h-full bg-emerald-500"></div>
            </AvatarFallback>
          </Avatar>
          <Avatar className="h-[48px] w-[48px] rounded-full">
            <AvatarImage />
            <AvatarFallback>
              <div className="w-full h-full bg-emerald-500"></div>
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="text-black font-medium text-[10px] mb-2">
              Codenrock и hh.ru
            </div>
            <div className="text-neutral-500 font-medium text-[10px]">
              10.12.2023 14:58
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[30px] font-semibold mb-4">{title}</div>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge>Коммуникация</Badge>
            <Badge>Веб-разработка</Badge>
            <Badge>Coding</Badge>
            <Badge>Low / No code</Badge>
          </div>
          <div className="mt-4">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
