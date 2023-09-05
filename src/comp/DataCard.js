import React from "react";
import "./DataCard.css";
function DataCard({data}) {
  console.log(data);
  return (

    <>
        {data ? (
            <div className="container">
            {data?.map((item,key)=>{
                return  <div className="poster" key={key}>
                <img className="poster-img" src={item.image.original} alt={item.name}/>
                </div>
            })}
        </div>) : 'waiting...'}
    </>


   

  )}

export default DataCard;
