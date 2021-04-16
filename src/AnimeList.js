import React from "react";
import AnimeCard from "./AnimeCard";
import {Link} from "react-router-dom";

function AnimeList (props){
return (
props.obj.map((item, index)=><Link to={`/description/${item.id}`}><AnimeCard anime={item} key={index} /></Link>)

);
}
export default AnimeList;