import React from 'react';
import CommunityCard from '@components/entities/community/community-card/community-card';
import UserCard from '@/components/entities/head-hunting/user-card';
import FiltersBlock from '@/components/entities/head-hunting/filters-block';

const HeadHuntingPage = () => {
  return (
    <div>
      <FiltersBlock />
      <div className="w-full flex flex-wrap gap-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
};

export default HeadHuntingPage;
