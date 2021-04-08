import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const BookDetail = (props) => {
 console.log(props);
  const {_id,price,writer, imageURL} = props.book;

  const history = useHistory()
  const handleBook = (_id) => {
 ;
      history.push(`/book/${_id}`);
  }
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            {writer}
            {price}
          </Card.Text>
          <Button onClick={() => handleBook(_id)} variant="primary">buy now</Button>
        </Card.Body>
      </Card>
    );
};

export default BookDetail;