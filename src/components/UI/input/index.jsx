import React from 'react'

export default function Input({htmlfor, label, type, inputClass , value}) {
  return (
    <div>
      <label htmlFor={htmlfor}>{label}</label><br/>
      <input type={type} value={value} className={inputClass} />
    </div>
  )
}
