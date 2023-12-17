import React, { useEffect, useState } from 'react';
import CompanyHeader from '@components/entities/company/company-header';
import { Tabs, TabsList, TabsTrigger } from '@components/ui/tabs';
import CompanyEvents from '@components/entities/company/company-events/company-events';
import { api } from '@lib/api/plugins';

const CompanyPage = () => {
  const [ownCompany,setOwnCompany]=useState({})
  const [banner,setBanner]=useState('')

  useEffect(()=>{
    getCompanyOwn()
  },[])

  const getCompanyOwn=async()=>{
    const newOwnCompany=await api.company.getCompanyByID(1)
    console.log("newOwnCompany",newOwnCompany)
    setOwnCompany(newOwnCompany)
    const newBanner= await api.file.getById(41)
    console.log(newBanner)
    setBanner(newBanner)
  }

  return (
    <div>
      <CompanyHeader url={banner}/>
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
