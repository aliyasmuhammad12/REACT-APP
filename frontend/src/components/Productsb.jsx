import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Productsb = () => {
  const [productsb, setProductsb] = useState([]);

  const dataFetch = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setProductsb(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <>
      <div className="container d-flex align-items-center  flex-wrap justify-content-center">
        {productsb.map((item) => (
          <div key={item.id} className="card">
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
            {/* You can display other properties of 'item' as needed */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Productsb;
