import React from 'react'
import { Card } from 'react-bootstrap';
const CardList = (props) => {
    console.log(props);
    return(
        <Card className="cardLayout" >
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted cardSub">created on: {props.date}</Card.Subtitle>
                <Card.Title className="cardTitle">{props.title}</Card.Title>

                <Card.Text className="cardText">
                    {props.description}
                </Card.Text>
                <div className="tag" >
                    <span>{ (props.activeTask) ? props.activeTask : 0 } tasks active</span>
                </div>
            </Card.Body>
        </Card>
    );
       
};

export default CardList;

