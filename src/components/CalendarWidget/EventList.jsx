import React from 'react'

export default function EventList({list}) {
  return (
    <div className="calwid-list">
      {
        !list ? 
        <div className="calwid-list-placeholder">Событий нет</div> :
        list.map((event, i) => 
          <div key={i} className="calwid-event">
            {event.time} • {event.text}
          </div>
        )
      }
      
    </div>
  )
}
