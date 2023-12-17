import React, { useEffect, useState } from 'react';
import CommunityCard from '@components/entities/community/community-card/community-card';
import { api } from '@/lib/api/plugins';

const CommunityPage = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getAllCompany();
  }, []);

  const getAllCompany = async () => {
    const newCompanies = await api.company.getAll();
    console.log(companies);
    setCompanies(newCompanies);
  };
  return (
    <div className="w-full flex flex-wrap gap-4">
      {companies.map(company => (
        <CommunityCard title={company?.title} url={company?.avatar?.url} />
      ))}
    </div>
  );
};

export default CommunityPage;
