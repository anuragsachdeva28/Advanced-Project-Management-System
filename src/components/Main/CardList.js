import React from 'react'
import { Card } from 'react-bootstrap';
const CardList = () => {
    return(
        <Card className="cardLayout" >
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted cardSub">created on:</Card.Subtitle>
            <Card.Title className="cardTitle">Dexpert Tool UI design</Card.Title>
                                
            <Card.Text className="cardText">
                Design user interface for the tool. lorem ipsum something
            </Card.Text>
            <div className="tag" >
                <span>12 tasks active</span>
            </div>
        </Card.Body>
    </Card> 
    );
       
};

export default CardList;

