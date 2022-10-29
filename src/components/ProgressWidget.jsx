import React from 'react';

import CircleProgress from './CircleProgress'

export default function ProgressWidget() {
  return (
    <div className="prgwid widget">
      <div className="prgwid-h widget-h">
        <div className="prgwid-title">Мой прогресс</div>
      </div>
      <div className="prgwid-b">
        <div className="prgwid-progress prgwid-b-chart">
          <div className='prgwid-progress__inner'>
            <CircleProgress 
              classname="prgwid-progress-circle _blue"
              label="Прогресс"
              value={35}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
