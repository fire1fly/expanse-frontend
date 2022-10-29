import React from 'react'

export default function CircleProgress({classname, value, label}) {
  return (
    <div className={`${classname} circle-progress__wrap`}>
      <svg xmlns="http://www.w3.org/2000/svg" className='circle-progress'>
        <circle className="circle-progress-placeholder" cx="75" cy="75" r="65"></circle>
        <circle 
          className="circle-progress-line" 
          cx="75" cy="75" r="65"
          style={{strokeDashoffset: `calc(440 - ${Math.round(value * 430 / 100)})`}}
          >
          </circle>
      </svg>
      {label ?
        <div className={`${classname}__inner circle-progress__inner`}>
          <div className="value">{value}%</div>
          <div className="label">{label}</div>
        </div>
        : null
      }
    </div>
  )
}
