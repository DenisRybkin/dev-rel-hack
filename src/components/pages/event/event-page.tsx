import { Badge } from '@/components/ui/badge';
import { IoCheckbox } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@/components/ui/button';
import { GitAttentionDialog } from '@/components/entities/event/dialog/git-attention-dialog';
import { useState } from 'react';

export const EventPage = () => {
  const [showModal,setShowModal] =useState<boolean>(false)
  const [status,setStatus]=useState("")
  return (
    <div>
      <GitAttentionDialog isOpen={showModal} onOpenChange={(open=>setShowModal(open))}/>
      <div className="flex gap-x-4">
        <Avatar className="h-[289px] w-[592px] rounded-lg">
          <AvatarImage />
          <AvatarFallback>
            <div className="w-full h-full bg-emerald-500"></div>
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center">
            <Avatar className="h-[48px] w-[48px] rounded-full">
              <AvatarImage />
              <AvatarFallback>
                <div className="w-full h-full bg-emerald-500"></div>
              </AvatarFallback>
            </Avatar>
            <div className="mb-2 ml-2">
              <div className="text-[10px]">Codenrock</div>
              <div className="text-gray text-[10px]">10.12.2023 14:58</div>
            </div>
          </div>
          <div className="text-[30px] font-semibold">DevRel</div>
          <div className="flex items-center gap-3 flex-wrap">
            <Badge>Коммуникация</Badge>
            <Badge>Веб-разработка</Badge>
            <Badge>Coding</Badge>
            <Badge>Low / No code</Badge>
          </div>
          <div className="my-2">
            <div className="text-[16px] font-normal mb-2">
              Регистрация до: 14.12.2024 23:59 (MSK)
            </div>
            <div className="text-[16px] font-normal mb-2">
              Команды: от 2 до 5 участников
            </div>
            <div className="text-[16px] font-normal">
              225 000 рублей и крутые призы от Codenrock!
            </div>
          </div>
        </div>
      </div>
      <div className='text-[16px] mt-6'>{status}</div>
      <div className="flex justify-between w-[590px] mt-2 mb-4">
        <Button variant="primary" className="w-[284px]" onClick={()=>setShowModal(!showModal)}>
          Подать заявку
        </Button>
        <Button variant="default" className="w-[284px]">
          Отложить
        </Button>
      </div>
      <div>
        <div className="text-[30px] font-semibold mb-4">DevRel</div>
        <div className="text-[16px] w-[910px] font-normal mb-2 leading-28">
          Значимость этих проблем настолько очевидна, что постоянный
          количественный рост и сфера нашей активности является качественно
          новой ступенью поэтапного и последовательного развития общества.
          Значимость этих проблем настолько очевидна, что экономическая повестка
          сегодняшнего дня не оставляет шанса для поставленных обществом задач.
          И нет сомнений, что ключевые особенности структуры проекта, которые
          представляют собой яркий пример континентально-европейского типа
          политической культуры, будут обнародованы.
        </div>
      </div>
    </div>
  );
};
