import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CheckOrder = () => {
    const {bookId} = useParams();
    console.log(bookId);
    const [bookData, setBookData] = useState({});
   
    useEffect(() => {
        fetch(`http://localhost:5050/book/${bookId}   `)
        .then(res => res.json())
        .then(data => setBookData(data));
     }, [bookId])
 
    //  const selctBook= bookData.find(book=>book.name === name)
    
     
      
    return (
        <div>
            {/* <h1>this is {selctBook.bookName} </h1> */}
            
        </div>
    );
};

export default CheckOrder;