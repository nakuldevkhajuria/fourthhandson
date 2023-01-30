import React, { useState } from 'react'
import Students from './Students';

function StudentEdit() {
    const [toggle,setToggle] = useState(false);
  const [formData,setFormData] = useState(
    {
      Name:'',
      Department : '',
      Rating : '',
      myEmployees : []
    }
  )
  function submitChange(e){


e.preventDefault();
    setFormData((prevFormData) => {
        const empObj = {
            Name: prevFormData.Name,
            Department: prevFormData.Department,
            Rating: prevFormData.Rating,
        };
        return {
            myEmployees: [...prevFormData.myEmployees, empObj],
            Name: '',
            Department: '',
            Rating: '',
        };
    });
    setToggle(true);
  }
  
  function changeValue(e){
   
     e.preventDefault();
  
       
          const newFormData = {...formData};
      
          newFormData[e.target.name] = e.target.value;
          setFormData(newFormData);

        

  
console.log(formData)
  }
  return (
    <>
     {/* { !toggle &&
      <form className='form'>
      <label>Name : </label>
      <input type='text' name='Name' value={formData.Name} onChange={changeValue}  required pattern="[a-zA-Z]+"></input> <br/>
      <label>Department : </label>
      <input type='text' name='Department' value={formData.Department} onChange={changeValue}  required pattern="[a-zA-Z]+"></input> <br/>
      <label>Rating : </label>
      <input type='text' name='Rating' value={formData.Rating} onChange={changeValue} required></input> <br/>
      <button className='button' type='button' onClick={submitChange}>Submit</button>
     
      </form> }
      { toggle && <Students  formData ={formData} />   }
       */}
    </>
  )
}

export default StudentEdit