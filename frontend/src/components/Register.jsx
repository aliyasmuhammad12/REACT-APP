import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Register = () => {
    // const defaultEmail='aliyas@1111.com'
    // const defaultPassword='ali'
    const [formData, setFormData]=
    useState({
        name:"",
        email:'',
        phone:'',
        gender:'',
        country:'',
        password:'',
        confirmPassword:'',
    })
    const{name,email,phone,gender,country,password,confirmPassword}=formData;
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const navigate= useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
        if(password !== confirmPassword){
            toast.error(' incorrect password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else{
            toast.success('correct password', {
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
       setTimeout(() => {
            navigate('/products')
       }, 100);
    };
  return (

    <form className='d-flex flex-wrap flex-column justify-content-center align-items-center mt-4' onSubmit={handleSubmit}>
<div className="mb-3 w-25">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" name='name' value={name} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3 w-25">
    <label for="exampleInputEmail1" className="form-label">Phone</label>
    <input type="number" name='phone' value={phone} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your phone number with anyone else.</div>
  </div>
  <div className="mb-3 w-25">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name='email' value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <select class="form-select w-25 mb-3" aria-label="Default select example">
  <option selected hidden>Select gender</option>
  <option value="2">Male</option>
  <option value="3">Female</option>
</select>
<select class="form-select w-25 mb-3" aria-label="Default select example">
  <option selected hidden>Select Country</option>
  <option value="2">Pakistan</option>
  <option value="3">india</option>
  <option value="2">Iran</option>
  <option value="3">China</option>
</select>
  <div className="mb-3 w-25">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={password} onChange={handleChange} className="form-control" id="exampleInpPassword1"/>
  </div>
  <div className="mb-3 w-25">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleChange}className="form-control" id="exampleInputPassword1"/>
  </div>
  <Link to="/login">Login</Link>
  <button className="btn btn-primary w-25 mt-3">Submit</button>
</form>
  )
}

export default Register