
import FiltersBlock from '@/components/entities/blog/filters-block';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api/plugins';
import { EventModel } from '@/lib/api/models2/models/EventModel';
import EventCard from '@/components/entities/company/company-events/event-card';
import { useNavigate } from 'react-router-dom';

export const BlogPage = () => {
  const [events,setEvents]=useState<Array<EventModel>>()
  const navigate= useNavigate()
  useEffect(() => {
    getAllEvents();
  }, []);
  async function getAllEvents() {
    const newEvents = await api.event.getAll(
      () => {},
      () => {}
    );
    console.log(newEvents)
    setEvents(newEvents);
  }
  return (
    <div>
      <FiltersBlock/>
      <div className='mt-[30px]'>
        {events?.map((event,index)=>(
          <EventCard key={index} title={event.title} className='mb-[72px]' onClick={()=>{navigate(`/event/${event.id}`)}}/>
        ))}
        
      </div>
    </div>
  );
};

