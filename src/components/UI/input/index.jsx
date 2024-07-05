import React from 'react'

export default function Input({htmlfor, label, type, inputClass , value, onChange}) {
  return (
    <div>
      <label htmlFor={htmlfor}>{label}</label><br/>
      <input type={type} value={value} className={inputClass} onChange={onChange} />
    </div>
  )
}
