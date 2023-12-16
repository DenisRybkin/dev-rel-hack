import { UserInfoCard } from '@/components/entities/lk/user-info-card';
import { UserInfoField } from '@/components/entities/lk/user-info-field';
import { Button } from '@components/ui/button';
import { Badge } from '@components/ui/badge';
import { UserAchievements } from '@/components/entities/lk/user-achievements';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import CompanyEvents from '@components/entities/company/company-events/company-events';

const LkPage = () => {
  return (
    <div>
      <UserInfoCard />
      <Button variant="primary" className="mt-3">
        Уведомить о желании связаться
      </Button>
      {/* <Button variant="default" className="mt-3">
        Редактировать
      </Button> */}
      <div className="flex items-center gap-3 flex-wrap mt-5">
        <Badge>UI/UX дизайнер</Badge>
        <Badge>React</Badge>
        <Badge>JavaScript</Badge>
        <Badge>HTML</Badge>
        <Badge>Junior</Badge>
      </div>
      <div className="mt-4">
        <UserInfoField title="Дата рождения" description="10.10.2000" />
        <UserInfoField title="Город" description="Пенза" />
        <UserInfoField
          title="Информация"
          description="Добрый день, я senior дизайнер из Пензы. Сейчас активно ищу работу. В первую очередь интересуют задачи, связанные с фастфудом и модой. Ну, типа Хагги Вагги мод в Макдоналдсе и прочее. "
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
