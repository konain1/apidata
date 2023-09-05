import React, { useEffect } from "react";
import "./DataCard.css";
import { useState } from "react";
import {AiOutlineStar} from 'react-icons/ai'



function DataCard({data}) {

    // console.log(data)
const [isHovering,setIsHovering] = useState(false)
const [itemId,setItemId] = useState()


const mouseHandler = (e,id)=>{
    // setItemName(name)
    // setTarget(e.target.alt);
    setIsHovering(true)
    setItemId(id)
    // if(itemName === target){

    //     e.target.style.display = 'none'
    // }

    // setIsHovering()

    
}

const mouseLeaveHandler = (e)=>{
    // setIsHovering(()=> false)
    // console.log(isHovering)  
    // e.target.style.display = 'block'
    setIsHovering(false)
    setItemId('')

}



  return (

    <>
        {data ? (
            <div className="container">
            {data?.map((item,key)=>{
                return  <div className="poster" key={item.id} onMouseEnter={(e)=>mouseHandler(e,item.id)}  onMouseLeave={(e)=>mouseLeaveHandler(e)} >
                {  
                     <>
                     <div className="poster-title" key={key}>
                        <h2>{item.name}</h2>
                        <div className={isHovering ? 'Desc' : 'desc'}>
                         <AiOutlineStar/> <span>{item.rating.average}</span>
                         <br></br>
                         <h2 className="genre" key={item.id}> Genre {item.genres.map((list)=> <span className="genres">{list}</span>)}</h2>
                         <br></br>
                         <span>premiered: {item.premiered}</span>
                         <br></br>
                         <span style={{fontSize:'8px'}}> URL :{item.url}</span>
                        </div>
                     </div>
                     {
                        itemId != item.id ? <img key={item.id}  className='poster-img' src={item.image.original} alt={item.name}  />
 : ' '
                     }

                     </>
                    

                }
                </div>
            })}
        </div>) : 'waiting...'}
    </>


   

  )}

export default DataCard;
