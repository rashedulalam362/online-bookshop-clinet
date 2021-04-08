import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOrder = () => {
    const { bookId } = useParams();
    const [order, setOrder] = useState({});
   
    useEffect(() => {
        fetch(`http://localhost:3000/book/${bookId}   `)
        .then(res => res.json())
        .then(data => setOrder(data))
     }, [])
 
    
    
     
      
    return (
        <div>
            <h1>this is checkorder{bookId} </h1>
            <h1>this is checkorder{order.title} </h1>
        </div>
    );
};

export default CheckOrder;