import React from 'react'

export default function Employeelistitem({employee}) {
  return (
    <div className="listitem-container">
     <div className= "listitem">
      <h3>{employee.name}</h3>
      {employee.title}
      </div>
      </div>
  )}
     
   
