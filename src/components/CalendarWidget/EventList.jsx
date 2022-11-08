import React from 'react'

export default function EventList({data}) {
  console.log(data);
  return (
    <div className="calwid-list">
      {
        !data?.events ? 
        <div className="calwid-list-placeholder">{data.message}</div> :
        data?.events.map((event, i) => 
          <div key={i} className="calwid-event">
            {event.time} • {event.text}
          </div>
        )
      }
      
    </div>
  )
}
