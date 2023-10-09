import React, { useEffect, useState } from "react";
import "./DataCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from 'react-redux';
import {HiOutlinePlay } from 'react-icons/hi'

function DataCard({ data,toggle }) {

  let pageindex = useSelector(state => state.movieReducer.pageindex);
  
const [idx,setIdx] = useState(1)

useEffect(()=>{
  setIdx(1)
},[data])


useEffect(()=>{
  setIdx(pageindex)
},[pageindex])

useEffect(()=>{
},[data])


  const [isHovering, setIsHovering] = useState(false);

  const [itemId, setItemId] = useState();

  const mouseHandler = (e, id) => {
    setIsHovering(true);
    setItemId(id);
  };

  const mouseLeaveHandler = () => {
    setIsHovering(false);
    setItemId("");
  };

  const nextHandler = (next)=>{

    setIdx(next)


  }

  return (
    <>
      {data ? (
        
        <div className={"container"}>
          {data.slice((idx-1) * 10 ,(idx-1) * 10 + 10).map((item) => {
            return (
              <div
                className="poster"
                key={item.id}
                onMouseEnter={(e) => mouseHandler(e, item.id)}
                onMouseLeave={mouseLeaveHandler}
              >
                <>
                  <div className="poster-title">
                    <h2>{item.name}</h2>
                      <button className="buttonUrl" > <HiOutlinePlay className="download" /><a href={item.url}>Watch this movie</a> </button>
                    <div className={"poster-rating" }>
                      <AiOutlineStar className="icon" /> <span>{item.rating.average}</span>
                      <br />
                      <div className="genre">
                      <span>premiered: {item.premiered} { }</span>  <br></br>

                        {item.genres.map((list, key) => (
                          <span key={key} className="genres">
                            {list} { }
                          </span>
                        ))}
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                  <div className="mobile-view">
                  <div className="mobileRating">
                  <AiOutlineStar className="ratingStar" /> <span>{item.rating.average}</span>
                    
                  </div>
                  <div className="mobilePremier">
                  <span>premiered: {item.premiered}</span>

                  </div>

                  <div className="mobile-genre">
                  {item.genres.map((list, key) => (
                          <span key={key} className="genres">
                            {list}
                          </span>
                        ))}
                  </div>
                  </div>
                 

                  
                    <img
                      className="poster-img "
                      src={item.image.original}
                      alt={item.name}
                    />
                  
                </>

                   
              </div>
              
            );
          })}


         
         
        </div>




      ) : (

     <h1>Loadding</h1>
         
      )}

      <div className="nextPrev">
        {idx > 1 ? <button onClick={(e)=>nextHandler(idx-1)}>PREV</button> : ''}
        {idx < (data.length / 10) ? <button onClick={(e)=>nextHandler(idx+1)}>NEXT</button> : ''}
         

     </div>

    </>
  );
}

export default DataCard;
