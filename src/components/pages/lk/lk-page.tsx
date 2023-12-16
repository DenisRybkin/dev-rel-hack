import { useState } from 'react';
import { UserInfoCard } from '@/components/entities/lk/user-info-card';
import { UserInfoField } from '@/components/entities/lk/user-info-field';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { UserAchievements } from '@/components/entities/lk/user-achievements';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import CompanyEvents from '@components/entities/company/company-events/company-events';
import { AdderGitAccount } from '@/components/entities/lk/adder-git-account';
import { IoCloseCircle } from 'react-icons/io5';

const skills = ['UI/UX дизайнер', 'React', 'JavaScript', 'HTML', 'Junior'];

const LkPage = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [isMyProfile, setIsMyProfile] = useState(true);
  return (
    <div>
      <UserInfoCard />
      {isMyProfile ? (
        <Button variant={`${isEdit ? 'primary' : 'default'}`} className="mt-3" onClick={()=>setIsEdit(!isEdit)}>
          {isEdit ? 'Сохранить изменения' : 'Редактировать'}
        </Button>
      ) : (
        <Button variant="primary" className="mt-3">
          Уведомить о желании связаться
        </Button>
      )}
      <div className="flex items-center gap-3 flex-wrap mt-5">
        {skills.map((skill, index) => (
          <Badge key={index}>
            <div className="flex items-center justify-between">
              <div className="text-[14px] mr-1">{skill}</div>
              {isEdit && <IoCloseCircle size={24} color="#EF4444" />}
            </div>
          </Badge>
        ))}
      </div>
      {isMyProfile&& <AdderGitAccount />}
      <div className="mt-4">
        <UserInfoField
          title="Дата рождения"
          description="10.10.2000"
          isEdit={isEdit}
        />
        <UserInfoField title="Город" description="Пенза" isEdit={isEdit} />
        <UserInfoField
          title="Информация"
          description="Добрый день, я senior дизайнер из Пензы. Сейчас активно ищу работу. В первую очередь интересуют задачи, связанные с фастфудом и модой. Ну, типа Хагги Вагги мод в Макдоналдсе и прочее. "
          isEdit={isEdit}
        />
      </div>
      <UserAchievements />
      <Tabs defaultValue="account" className="w-[400px]" value="current">
        <TabsList>
          <TabsTrigger value="current">Текущие</TabsTrigger>
          <TabsTrigger value="will">Будущие</TabsTrigger>
          <TabsTrigger value="ended">Завершенные</TabsTrigger>
          <TabsTrigger value="all">Все</TabsTrigger>
        </TabsList>
      </Tabs>
      <CompanyEvents />
    </div>
  );
};

export default LkPage;
