import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify';

const Login = () => {
    const defaultEmail='aliyas@1111.com';
     const defaultPassword='ali';
     const [formData,setFormData] = 
     useState({

        email:'',
        password:'',
    })
    const{email,password,}=formData;
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const navigate= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        if(password === defaultPassword && email===defaultEmail){
            toast.success(' correct password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(() => {
                    navigate('/Products')
               }, 1000);
        }else{
            toast.error('incorrect password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
               
        }
      
    };
  return (

    <form className='d-flex flex-wrap flex-column justify-content-center align-items-center mt-4' onSubmit={handleSubmit}>
  <div className="mb-3 w-25">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 w-25">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={password} onChange={handleChange} className="form-control" id="exampleInpPassword1"/>
  </div>
  <button className="btn btn-primary w-25 mt-3">Submit</button>
</form>
  )
}

export default Login