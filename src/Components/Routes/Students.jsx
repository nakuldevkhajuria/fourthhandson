import React from 'react'
import { NavLink } from 'react-router-dom'

function Students() {
  return (
    <div>Students
      <NavLink to='/student-edit'>Add student </NavLink>

      {/* <div className='list'>
    {formData.myEmployees.map((value,index)=> {
    
      return (
    
          <div key={index} className='wholeDiv' >
        
         
           Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
    
    
    
    
        </div> 
        
      )
    })}
          </div> */}
    </div>
  )
}

export default Students