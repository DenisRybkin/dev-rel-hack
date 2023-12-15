import React from 'react';
import FiltersBlock from '@components/entities/blog/filters-block';
import EventCard from '@components/entities/company/company-events/event-card';

const BlogPage = () => {
  return (
    <div>
      <FiltersBlock/>
      <div className='mt-6'>
        <EventCard className='mb-[72px]'/>
        <EventCard className='mb-[72px]'/>
        <EventCard className='mb-[72px]'/>
      </div>
    </div>
  );
};

export default BlogPage;