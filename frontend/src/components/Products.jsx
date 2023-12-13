import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'



const Products = () => {
const [products,setProducts]=useState([])
const dataFetch=async()=>{
const response =await fetch("http://localhost:8089/getUsers")
const data=await response.json();
setProducts(data);
}

useEffect(()=>{
    dataFetch();
},[])

  return (
    <>
    <div className="d-flex  flex-wrap justify-content-center  gap-4 mt-5">
    {
        products.map((item)=>{
            return(
                <div class="card align-items-center text-align-center" style={{width: "18rem", height:"100%"}}>
    <img src={item.image} class="card-img-top" style={{height:"170px"}} alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">{item.from}</p>
      <p class="card-text">{item.phone}</p>
      <Link to={`/products/${item.id}`} class="" style={{width: "250px",}}>{item.class}</Link>
    </div>
  </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Products