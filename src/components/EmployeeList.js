import React from 'react'
import data from "../Data"
import EmployeeListitem from "./EmployeeListItem"

export default function EmployeeList(){
  return (
    <div className ="employeelist">
      {data.map((employee) =>{
      return(
        <div>
          <EmployeeListitem employee ={employee}/> 
        </div>
        )
    }
    )}
    </div>
  )
 }
