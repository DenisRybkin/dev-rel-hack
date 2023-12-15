import React from 'react';
import CommunityCard from '@components/entities/community-card/community-card';

const CommunityPage = () => {
  return (
    <div className='w-full flex flex-wrap gap-4'>
      <CommunityCard/>
      <CommunityCard/>
      <CommunityCard/>
      <CommunityCard/>
      <CommunityCard/>
    </div>
  );
};

export default CommunityPage;