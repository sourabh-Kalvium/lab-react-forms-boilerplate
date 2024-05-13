import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [inputdata,setInputData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:""
  })
  
  let [err,setErr]=useState({
    firstNameErr:"",
    lastNameErr:"",
    emailErr:"",
    phoneErr:""
  })

   
  let handleInput=(e)=>{
     let{name,value}=e.target
     setInputData({...inputdata,[name]:value})
  }
 
  let handleSubmit=(e)=>{
    e.preventDefault()
      let errObj={}
      if(inputdata.firstName ==""){
        errObj={...errObj,firstNameErr:"firstname is a mandatory feild"}
      }
      if(inputdata.lastName ==""){
        errObj={...errObj,lastNameErr:"last name is a mandatory feild"}
      }
      if(inputdata.email==""){
        errObj={...errObj,emailErr:"Email is a mandatory feild"}
      }
      else{
        let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        let isValid=emailRegex.test(inputdata.email)
        if(!isValid){
          errObj={...errObj,emailErr:"Enter a proper Email"}
        }

      }

      if(inputdata.phone==""){
        errObj={...errObj,phoneErr:"Phone is a mandatory feild"}
      }
      else{
        let phoneRegex =/^\d{10}$/
        let isValid=phoneRegex.test(inputdata.phone)
        if(!isValid){
          errObj={...errObj,phoneErr:"Enter a proper Phone number"}
        }
      }
      
      if(Object.keys(errObj).length==0){
        alert("registration success")
      }
      setErr({...errObj})
      
      

  }

 
  
   
  return (
    <>
        { console.log(err)}
       <form onSubmit={handleSubmit} >
          
          <input type="text" placeholder='first name'name="firstName" onChange={handleInput} />
          <p>{err.firstNameErr?err.firstNameErr:""}</p>
          <input type="text" placeholder='last name' name="lastName" onChange={handleInput}/>
          <p>{err.lastNameErr?err.lastNameErr:""}</p>
          <input type="email"  placeholder='email' name="email" onChange={handleInput}/>
          <p>{err.emailErr?err.emailErr:""}</p>
          <input type="number" placeholder='Phone number' name="phone" onChange={handleInput} />
          <p>{err.phoneErr?err.phoneErr:""}</p>
          <input type="submit" value="Register"/>
       </form>
    
    </>
  )
}

export default App
