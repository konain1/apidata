import React, { useEffect } from "react";
import "./DataCard.css";
import { useState } from "react";



function DataCard({data}) {

    // console.log(data)
const [isHovering,setIsHovering] = useState(false)
const [target,setTarget] = useState('')
const [itemName,setItemName] = useState('')

const mouseHandler = (e,name)=>{
    setItemName(name)
    setTarget(e.target.alt);

    if(itemName === target){

        e.target.style.display = 'none'
    }

    // setIsHovering()
}

const mouseLeaveHandler = (e)=>{
    // setIsHovering(()=> false)
    // console.log(isHovering)  
    e.target.style.display = 'block'
}



  return (

    <>
        {data ? (
            <div className="container">
            {data?.map((item,key)=>{
                return  <div className="poster" key={key}>
                {  
                     <>
                     <div className="poster-title">
                        <h2>{item.name}</h2>
                     </div>
                    <img key={item.id} className="poster-img"  src={item.image.original} alt={item.name} onMouseEnter={(e)=>mouseHandler(e,item.name)} onMouseLeave={(e)=>mouseLeaveHandler(e)} />

                     </>
                    

                }
                </div>
            })}
        </div>) : 'waiting...'}
    </>


   

  )}

export default DataCard;
