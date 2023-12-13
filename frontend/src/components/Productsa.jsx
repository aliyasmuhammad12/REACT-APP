import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Products=()=>{
    const [product, setProduct] = useState([]);
    const data = async () =>{
        const response = await fetch('http://localhost:8089/getUsers');
        const data = await response.json();
        setProduct(data);
    }
    useEffect(()=>{
        data();
    }, [])
    return (
    <div className="container mt-4 gap-3">
        <div className="row">
            {product.map((item)=>(
                <div key={item.id} className='col-md-4 mb-4'>
                    <div className="card"style={{width:'400px', height:'200px'}}>
                        <div className="card-body">
                            <img src={item.image} alt="" style={{width:'200px', height:'200px'}}
                            className='card-img-top' />
                            <h5 className='card-title'>{item.name}</h5>
                            <p className='card-text'>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div> 
    )
 }


export default Products