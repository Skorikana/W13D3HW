import React from 'react'
import Header from "../components/Header";
import SearchBar from "../components/SearchBar"
import EmployeeList from "../components/EmployeeList"

export default function Home(props) {
  return (
    <div className ="home">
      <div className ="employee-directory">
      <Header text ="Employee-directory"/>
      </div>
      <SearchBar/>
      <EmployeeList/>
    </div>
      
  )
}
