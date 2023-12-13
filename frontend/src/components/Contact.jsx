import React,{useState} from 'react';
import axios from 'axios';
import Admin from './Admin';

const Contact = () => {
    const [formData,setFormData]=
    useState({
        name:'',
        email:'',
        message:'',
        ImageUrl: ''
    })
    const{name,email,message, ImageUrl}=formData;
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const data = await axios.post("http://localhost:8089/contact",formData)
        console.log(formData);
        alert("submitted")
    };
  return (
    <>
    
    <form onSubmit={handleSubmit} className='d-flex flex-wrap flex-column justify-content-center align-items-center mt-4'>
      <div className="mb-3 w-50">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" name='name' value={name} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="enter your name"/>
</div>
        <div className="mb-3 w-50">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" name='email'value={email} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3 w-50">
  <label for="exampleFormControlTextarea1" className="form-label">message</label>
  <input type="text" name='ImageUrl' value={ImageUrl} onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Enter image url"/>
  <textarea  className="form-control" id="exampleFormControlTextarea1" name='message' value={message} onChange={handleChange} rows="3"></textarea>
</div>
<button className='btn btn-danger w-50'>Submit</button>

    </form>

    <Admin/>
    </>

  )
}

export default Contact