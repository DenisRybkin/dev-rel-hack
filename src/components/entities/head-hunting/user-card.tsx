import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { FiPhone } from 'react-icons/fi';
import { TbBrandTelegram } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa6';
import { Button } from '@components/ui/button';

const UserCard = () => {
  return (
    <div className="h-[390px] w-[32%] bg-white rounded-lg p-6">
      <div className="flex items-center gap-x-4">
        <Avatar className="h-[106px] w-[106px] rounded-lg">
          <AvatarImage />
          <AvatarFallback>
            <div className="w-full h-full bg-emerald-500"></div>
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="text-[30px] font-semibold">Иван Иванович</div>
          <div className="text-[14px] font-normal">
            Добрый день, я senior дизайнер...
          </div>
          <div className="flex items-center gap-x-2">
            <FaGitAlt size={24} color="#F26357" />
            <div className="text-gray text-[14px] font-normal">
              Повышенное доверие
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-[18px] font-semibold mt-4 mb-2">Достижения</div>
        <div className="text-[14px] font-medium mb-1">
          Devrel - 1 место, frontend
        </div>
        <div className="text-[14px] font-medium mb-1">
          Confa - 2 место, frontend
        </div>
        <div className="text-[14px] font-medium mb-1">
          Hackaton - 3 место, frontend
        </div>
      </div>
      <div className="text-blue text-[14px] font-medium mb-2 underline">
        Все достижения
      </div>
      <div className="flex items-center gap-x-6 my-4">
        <div className="flex items-center gap-x-2">
          <FiPhone size={24} />
          <div className="text-blue text-[14px] font-medium">
            pochta@pochta.ru
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <TbBrandTelegram />
          <div className="text-blue text-[14px] font-medium">@telegrammer</div>
        </div>
      </div>
      <Button variant="primary" className="w-full">
        Уведомить о желании связаться
      </Button>
    </div>
  );
};

export default UserCard;
