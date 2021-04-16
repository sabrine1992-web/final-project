import React from 'react';
export default function Description({match,data}){
  var anime= data.find(p => p.id == match.params.id);
  var animeData;

  if(anime)
  animeData = <div className="d">
    <img style={{width:'200px',paddingLeft:'1cm'}} src={anime.img} />
      <hr/>
      <h2 style={{color:'crimson',paddingLeft:'1cm' }}> {anime.title} </h2>
      <p className="p"><h4>{anime.describe}</h4></p>
      <hr/>
      <h4 className="link">{anime.link}</h4>  </div>;
  else
  animeData = <h2> Sorry. anime doesnt exist </h2>;

  return (
    <div>
      <div>
         {animeData}
      </div>
    </div>
  )   
}
