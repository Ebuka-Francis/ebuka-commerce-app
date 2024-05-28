import React from 'react'

export default function Input({htmlfor, label, type, inputClass}) {
  return (
    <div>
      <label htmlFor={htmlfor}>{label}</label><br/>
      <input type={type} className={inputClass} />
    </div>
  )
}
