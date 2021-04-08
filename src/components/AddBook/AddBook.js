import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import Button from 'react-bootstrap/Button';

const AddBook = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL,setImageURL]=useState(null)
  
  const onSubmit = data => {
    const eventData={
    name:data.name,
   imageURL:imageURL

    };
    const url=`http://localhost:5055/addBook`;
  
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(eventData)
    })
    .then(res=>{
      console.log('server side respond ',res);
    })
  };
  
  const handleImageUpload=event=>{
  console.log(event.target.files[0]);
  const imageData=new FormData();
  imageData.set('key','f55bee829750295813db4effab2d9b8f')
  imageData.append('image',event.target.files[0])
  axios.post('https://api.imgbb.com/1/upload', 
  imageData
  )
  .then(function (response) {
    setImageURL(response.data.data.display_url);
  })
  .catch(function (error) {
    console.log(error);
  });



  }
  // const deleteBook=id=>{
  

  // }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <input name="name" defaultValue="book" {...register("name")} /><br/>
      <input name="price"  defaultValue="price" {...register("price")} /><br/>
      <input name="writer" defaultValue="writer" {...register("writer")} /><br/>
      <input {...register("exampleRequired", { required: true })} type="file" onChange={handleImageUpload} /><br/>
      
      
      
      <input type="submit" /><br/>
      {/* <Button variant="warning" onClick={()=>deleteBook(book._id)} >Delete Button</Button>{' '} */}
    </form>
  );
};

export default AddBook;