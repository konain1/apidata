import React from "react";
import "./DataCard.css";
import { useState } from "react";



function DataCard({data}) {

    console.log(data)
const [isHovering,setIsHovering] = useState(false)


const mouseHandler = (e)=>{
    const selectImg = e.target
    selectImg.style.display = 'none'
    setIsHovering(true)
}

  return (

    <>
        {data ? (
            <div className="container">
            {data?.map((item,key)=>{
                return  <div className="poster" key={key}>
                {
                    isHovering === true ? <div>{
                         <>
                         <h1>{item.name}</h1>
                        <p>{item.rating.average}</p>
                         </>                       
                    }</div>:
                    <img className="poster-img" src={item.image.original} alt={item.name}  onMouseEnter={(e)=>mouseHandler(e)}/>

                }
                </div>
            })}
        </div>) : 'waiting...'}
    </>


   

  )}

export default DataCard;
