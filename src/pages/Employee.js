import React from 'react'

export default function Employee() {
  return (
    <div className = "employee-container">
     <div className ="employee">
       <h3>Employee</h3> 
       </div>
      <div className ="list-items">  
      <h4>Julie Taylor</h4>
       <p>VP of Marketing</p>
      </div>
      <div className ="office">
      <p>Call-Office:781-000-0002</p>
      </div>
      <div className="cell">
      <p>Cell:617-000-0002</p>
      </div>
      <div className ="sms">
      <p>SMS:617-000-0002</p>
      </div>
      <div className ="email">
      <p>E-mail:jtaylor@fakemail.com</p>
      </div> 
    </div>
   
  )
}
