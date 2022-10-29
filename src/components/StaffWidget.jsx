import React from 'react'

export default function StaffWidget() {
  return (
    <div className="staffwid">
      <div className="staffwid-title">Сотрудники</div>
      <div className='staffwid-track'>
        <div className='staffwid-list'>
          {Array(2).fill('').map((_, i) => 
            <div key={i} className="staffwid-group">
              <div className="staffwid-group-label">Отдел кадров</div>
              <div className="staffwid-group__sep"></div>
              <div className='staffwid-group__inner'>
                {Array(3).fill('').map((_, j) =>
                  <div key={j} className="staffwid-item">
                    <div className="staffwid-item-avatar"></div>
                    <div className="staffwid-item-info">
                      <div className="staffwid-item-name">Иван Иванов</div>
                      <div className="staffwid-item-value">Старший HR специалист</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
