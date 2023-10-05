import React, { useEffect, useState } from "react";
import "./DataCard.css";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector } from 'react-redux';

function DataCard({ data }) {

  let pageindex = useSelector(state => state.movieReducer.pageindex);
  
const [idx,setIdx] = useState(1)

useEffect(()=>{
  setIdx(1)
},[data])


useEffect(()=>{
  setIdx(pageindex)
},[pageindex])

useEffect(()=>{
  console.log(data)
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
        
        <div className="container">
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
                    <div className={itemId === item.id ? "poster-title" : "hidden"}>
                      <AiOutlineStar /> <span>{item.rating.average}</span>
                      <br />
                      <h2 className="genre">
                        Genre
                        {item.genres.map((list, key) => (
                          <span key={key} className="genres">
                            {list}
                          </span>
                        ))}
                      </h2>
                      <br />
                      <span>premiered: {item.premiered}</span>
                      <br />
                      <span style={{ fontSize: "8px" }}>URL: {item.url}</span>
                    </div>
                  </div>
                  {itemId !== item.id ? (
                    <img
                      className="poster-img"
                      src={item.image.original}
                      alt={item.name}
                    />
                  ) : null}
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
