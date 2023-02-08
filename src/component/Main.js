import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

// const image = {
//     margin: '40px',
//     border: '5px solid pink',
//     color: "red"
//   };

 const Main = (props) => {
    console.log(props);
  return (
    <div>
        <CardGroup >
      <Card className='All'>
        <Card.Img variant="top" style={{width:"300px",height:"300px" }} src={props.bookImage} />
        <Card.Body>
          <Card.Title style={{fontSize:"30px"}}>{props.bookTitle}</Card.Title>
          <Card.Title>{"Written by "}{props.author}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">  </small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Main
