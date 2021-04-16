import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
function AnimeCard(props) {
    return (

        <div className="flex">
            <Card border="primary" style={{ width: '19rem' , marginBottom : 30}} >
                <Card.Img style={{width:'200px'}} style={{Height:'90px'}}  variant="top" src={props.anime.img}></Card.Img>
                <Card.Body>
                    <Card.Title style={{color:"red"}}>{props.anime.title}</Card.Title>
                    
                    {props.anime.rate}
                    <Rating
                        readOnly
                        name="simple-controlled"
                        value={props.anime.rate}
                    />

                </Card.Body>
            </Card>
        </div>
    );
}
export default AnimeCard;