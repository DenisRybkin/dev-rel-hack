import { Badge } from '@/components/ui/badge';
import { IoCheckbox } from 'react-icons/io5';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@/components/ui/button';
import { GitAttentionDialog } from '@/components/entities/event/dialog/git-attention-dialog';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api/plugins';
import { EventModel } from '@/lib/api/models2/models/EventModel';
import { useParam } from '@/lib/utils/hooks';

const eventRequestStatus = {
  requestForModeration: 'Заявка на модерации',
  beenDeclared: 'Вы уже заявлены',
  notPassed: 'Вы не прошли модерацию!',
};
export const EventPage = () => {
  const [event, setEvent] = useState<EventModel>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [status, setStatus] = useState('');
  const [company,setCompany]=useState()
  const id = useParam('id');

  useEffect(() => {
    getEventById(Number(id));
  }, []);

  const getEventById = async (id: number) => {
    const newEvent = await api.event.getEventByID(
      id,
      () => {},
      () => {}
    );
    setEvent(newEvent);
    console.log(newEvent)
    const newCompany = await api.company.getCompanyByID(Number(newEvent.company_id))
    setCompany(newCompany[0])
    console.log(newCompany)
  };

  return (
    <div>
      <GitAttentionDialog
        isOpen={showModal}
        onOpenChange={open => setShowModal(open)}
      />
      <div className="flex gap-x-4">
        <Avatar className="h-[289px] w-[592px] rounded-lg">
          <AvatarImage/>
          <AvatarFallback>
            <div className="w-full h-full bg-emerald-500"></div>
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center">
            <Avatar className="h-[48px] w-[48px] rounded-full">
              <AvatarImage src={company?.avatar?.url} />
              <AvatarFallback>
                <div className="w-full h-full bg-emerald-500"></div>
              </AvatarFallback>
            </Avatar>
            <div className="mb-2 ml-2">
              <div className="text-[10px]">{company?.title}</div>
              <div className="text-gray text-[10px]">10.12.2023 14:58</div>
            </div>
          </div>
          <div className="text-[30px] font-semibold my-3">{event.title}</div>
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
      <div className="text-[16px] mt-6">{status}</div>
      <div className="flex justify-between w-[590px] mt-2 mb-4">
        {status == '' && (
          <Button variant="primary" className="w-[284px]" onClick={()=>{
            setShowModal(!showModal);
            setStatus(eventRequestStatus.requestForModeration)
          }}>
            Подать заявку
          </Button>
        )}
        {status == 'Заявка на модерации' && (
          <Button variant="primary" className="w-[284px]" onClick={()=>{
            setStatus('')
          }}>
            Отменить заявку
          </Button>
        )}
        <Button variant="default" className="w-[284px]">
          Отложить
        </Button>
      </div>
      <div>
        <div className="text-[30px] font-semibold mb-4">{event.title}</div>
        <div className="text-[16px] w-[910px] font-normal mb-2 leading-28">
          {event.description}
        </div>
      </div>
    </div>
  );
};
