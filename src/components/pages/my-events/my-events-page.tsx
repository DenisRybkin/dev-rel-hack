import React from 'react';
import FiltersBlock from '@components/entities/blog/filters-block';
import EventCard from '@components/entities/company/company-events/event-card';

const MyEventsPage = () => {
  return (
    <div>
      <FiltersBlock />
      <div className="flex flex-col mt-6 space-y-16">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default MyEventsPage;
