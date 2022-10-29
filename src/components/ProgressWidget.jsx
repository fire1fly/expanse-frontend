import React from 'react';

import CircleProgress from './CircleProgress';

const stat = [
  {value: 5, label: "блоков завершено"},
  {value: 15, label: "практических работ выполнено"},
  {value: 1, label: "блоков осталось изучить"},
]

export default function ProgressWidget() {
  return (
    <div className="prgwid widget">
      <div className="prgwid-h widget-h">
        <div className="prgwid-title">Мой прогресс</div>
      </div>
      <div className="prgwid-b">
        <div className="prgwid-progress__wrap prgwid-b-chart">
          <CircleProgress 
            classname="_blue prgwid-progress"
            label="Прогресс"
            value={10}
          />
        </div>
        <div className="prgwid-list">
          {
            stat.map((item, i) => 
              <div key={i} className="prgwid-item">
                <div className="prgwid-item-value">{item.value}</div>
                <div className="prgwid-item-label">{item.label}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
