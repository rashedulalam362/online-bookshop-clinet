import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const BookDetail = (props) => {

  const {bookId,price,writer, imageURL} = props.book;
  const history = useHistory()
  const handleBook = (bookId) => {
      history.push(`/book/${bookId}`);
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
          <Button onClick={() => handleBook(bookId)} variant="primary">buy now</Button>
        </Card.Body>
      </Card>
    );
};

export default BookDetail;