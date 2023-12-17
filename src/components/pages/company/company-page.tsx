import React from 'react';
import CompanyHeader from '@components/entities/company/company-header';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import CompanyEvents from '@components/entities/company/company-events/company-events';
import { useTranslation } from 'react-i18next';
import { toast } from '@components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '@lib/api/plugins';

const CompanyPage = () => {
  // const { t } = useTranslation();
  // const navigate = useNavigate();

  // const handleError = () =>
  //   void toast({ variant: 'destructive', title: t('toast:error.default') }) ||
  //   navigate(-1);

  // const ownCompanyQuery = useQuery({
  //   queryKey: [api.company.toString(), 'own'],
  //   queryFn: () => api.company.own(),
  // });

  // console.log(ownCompanyQuery);

  return (
    <div>
      <CompanyHeader />
      <div
        style={{
          borderTop: '1px solid lightgray',
          height: '1px',
          width: '100%',
        }}
        className="my-10"
      ></div>
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

export default CompanyPage;
