import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { MdOutlineMail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";

const LkPage = () => {
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <Avatar className="h-[284px] w-[284px] rounded-lg">
          <AvatarImage />
          <AvatarFallback>
            <div className="w-full h-full bg-emerald-500"></div>
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-[25px] font-semibold">Иван Иванович</div>
          <div>
          <div className='flex items-center gap-x-2'>
            <FiAward size={24}/>
            <div className='text-blue text-[14px] font-medium'>+7 (900) 500-50-50</div>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdOutlineMail  size={24}/>
            <div className='text-blue text-[14px] font-medium'>pochta@pochta.ru</div>
          </div>
          <div className='flex items-center gap-x-2'>
            <TbBrandTelegram  size={24}/>
            <div className='text-blue text-[14px] font-medium'>@telegrammer</div>
          </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LkPage;