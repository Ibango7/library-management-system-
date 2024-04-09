'use client';
import React from 'react';
import Events from '@/components/events';

const EventsPage:React.FC = () => {
  return (
    <div>
      <Events/>
      <button onClick={() => console.log('clicked')}>Click me</button>
    </div>
  )
}

export default EventsPage
