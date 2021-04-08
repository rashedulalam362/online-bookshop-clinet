import React from 'react';
// import booksData from '../FakeData/FakeData';
import books from '../Home/Home'

const MangeOrder = () => {
    const handleAddBook=()=>{
      fetch('http://localhost:3000/addBook',{
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(books)
      })      
    }
    return (
      
        <div>
            <button onClick={handleAddBook}>AddBook</button>
        </div>
    );
};

export default MangeOrder;