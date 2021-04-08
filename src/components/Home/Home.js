import React, { useEffect, useState } from 'react';
import BookDetail from '../BookDetail/BookDetail';

const Home = () => {
    const[books, setBooks]=useState([])

    useEffect(()=>{ 
    fetch('https://gentle-headland-32263.herokuapp.com/books')
    .then(res=>res.json())
    .then(data=>setBooks(data))
  
    },[])
 
    // const books = [
    //     {
    //         bookId: 1,
    //         title: 'Typescript',
    //         writer:"Dan vederkam",
    //         imgUrl: 'https://i.ibb.co/h7y9fDS/image-23.png ',
    //         price: 119 ,
    //     },
    //     {
    //         bookId: 2,
    //         title: 'Eloquent Javscript',
    //         imgUrl: 'https://i.ibb.co/x7Z3wfq/image-19.png',
    //         writer:"Marten hevervike",
    //          price: 149
    //     },
    //     {
    //         bookId: 3,
    //         title: 'Learning REACT ',
    //         imgUrl: "https://i.ibb.co/BcmFHN3/image-20.png" ,
    //         writer:"Alex banks, & eve parcello",
    //         price: 199
    //     },

    //     {
    //         bookId:4,
    //         title: 'Javascript everwhere ',
    //         imgUrl: "https://i.ibb.co/h7y9fDS/image-23.png"  ,
    //         writer:"Adom d Scotttak lutz",
    //         price: 199
    //     },
    //     {
    //         bookId: 5,
    //         title: 'Typescript',
    //         writer:"Dan vederkam",
    //         imgUrl: 'https://i.ibb.co/h7y9fDS/image-23.png ',
    //         price: 119 ,
    //     },
    //     {
    //         bookId: 6,
    //         title: 'Eloquent Javscript',
    //         imgUrl: 'https://i.ibb.co/x7Z3wfq/image-19.png',
    //         writer:"Marten hevervike",
    //          price: 149
    //     },
    //     {
    //         bookId:7,
    //         title: 'Javascript everwhere ',
    //         imgUrl: "https://i.ibb.co/h7y9fDS/image-23.png"  ,
    //         writer:"Adom d Scotttak lutz",
    //         price: 199
    //     },
    //     {
    //         bookId: 8,
    //         title: 'Typescript',
    //         Writer:"Dan vederkam",
    //         imgUrl: 'https://i.ibb.co/h7y9fDS/image-23.png ',
    //         price: 119 ,
    //     },

    //     {
    //         bookId:9,
    //         title: 'Javascript everwhere ',
    //         imgUrl: "https://i.ibb.co/h7y9fDS/image-23.png"  ,
    //         writer:"Adom d Scotttak lutz",
    //         price: 199
    //     },
       
    // ]
    return (


        <div className="container my-5 ">
        <div className="row">
            {
                books.length === 0 && <p>loading.......</p>
            }
           {
            // books.map(book => <BookDetail key={book.bedType} book={book}></BookDetail>)
            books.map(book=><BookDetail book={book} key={book.BookId}></BookDetail>)   
           } 
        </div>
    </div>
    );
};

export default Home;