import React from 'react';

const cources = [
  {
    title: 'Корпоративная этика, как основа успеха в коллективе',
    description: 'Описание описание описание описание описание описание',
    progressValue: '80'
  },
  {
    title: 'Корпоративная этика, как основа успеха в коллективе',
    description: 'Описание описание описание описание описание описание',
    progressValue: '40'
  },
  {
    title: 'Корпоративная этика, как основа успеха в коллективе',
    description: 'Описание описание описание описание описание описание',
    progressValue: '20'
  },
  {
    title: 'Корпоративная этика, как основа успеха в коллективе',
    description: 'Описание описание описание описание описание описание',
    progressValue: '5'
  },
]

export default function Courses() {
  return (
    <div className="crs">
      <div className="crs-title">Обучение</div>
      <div className='crs-track'>
        {cources.map((item, i) => 
          <div key={i} className="crs-card">
            <div className="crs-card-title">{item.title}</div>
            <div className="crs-card-desc">{item.description}</div>
            <div className="crs-card-progress">
              <div className="crs-card-progress-value">
                <div className="label">прогресс</div>
                <div className="value">{item.progressValue}%</div>
              </div>
              <div className="crs-card-progress-placeholder">
                <div className="progress" style={{width: `${item.progressValue}%`}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
