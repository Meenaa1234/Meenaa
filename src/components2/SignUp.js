import React,{useState} from 'react';
import  axios from 'axios';
import {useNavigate } from 'react-router-dom';
import './SignUp.css'
 function SignUp() {
  let navigate = useNavigate();
   const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    mobileNum:'',
    username:''
   })
   const {name,email,password,mobileNum,username}=data;
   const changeHandler =e =>{
    setData({...data,[e.target.name]:e.target.value})
   }
   const submitHandler = e=>{
    e.preventDefault(); 
    axios.post('https://ixonotest.herokuapp.com/api/User/submit-profile',data)
    .then(  (response)=>{
      // history.replace("/").
      navigate("/Output");
        
    }).catch((error)=>{
      console.log(error);
    })
    console.log(data);
   }
  return (
    <div className='formbody'>
      <form onSubmit={submitHandler}>
        <div>
        <h1 className='heading'>Submit Profile</h1>
        </div><br />
        <div>
        <label className="b1" htmlFor="name">Name </label>
        <input type='text' name='name' value={name} onChange={changeHandler} className="ib1"/>
        </div>
        <br/>
        <div>
        <label className="b2" htmlFor="email">Email </label>
        <input type='email' name='email'value={email} onChange={changeHandler} className="ib2"/>
        </div>
        <br/>
        <div>
        <label className="b3" htmlFor="password">Password </label>
        <input type='password' name='password' value={password} onChange={changeHandler} className="ib3"/>
        </div>
        <br/>
        <div>
        <label  className="b4" htmlFor="mblnumber">Mobile Number </label>
        <input type='number' name='mobileNum' value={mobileNum  } onChange={changeHandler} className="ib4"/>
        </div>
        <br/>
        <div>
        <label className="b5" htmlFor="username">User Name </label>
        <input type='username' name='username' value={username} onChange={changeHandler} className="ib5"/>
        </div>
        <br/>
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}
export default SignUp;