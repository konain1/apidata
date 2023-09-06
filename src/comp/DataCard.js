import React, { useEffect } from "react";
import "./DataCard.css";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import  { useRef } from 'react';



function DataCard({ data }) {
    const myRef = useRef();
  const [isHovering, setIsHovering] = useState(false);
  const [itemId, setItemId] = useState();

  const mouseHandler = (e, id) => {
 
    setIsHovering(true);
    setItemId(id);
    console.log(myRef)
    // myRef.current.style.display = 'none'    
   
    
  };

  const mouseLeaveHandler = (e) => {

    setIsHovering(false);
    setItemId("");
    // myRef.current.style.display = 'none'    


  };
  const hideImage = () => {
    myRef.current.style.display = 'none';
  };
  const showImage = () => {
    myRef.current.style.display = 'block'; // You can use 'inline', 'inline-block', 'flex', etc. depending on your layout needs.
  };

  

  return (
    <>
      {data ? (
        <div className="container">
          {data?.map((item, key) => {
            return (
              <div
                className="poster"
                key={item.id}
                onMouseEnter={(e) => mouseHandler(e, item.id)}
                onMouseLeave={(e) => mouseLeaveHandler(e)}
              >
                {
                  <>
                    <div className="poster-title" key={key}>
                      <h2>{item.name}</h2>
                      <div className={isHovering ? "Desc" : "desc"}>
                        <AiOutlineStar /> <span>{item.rating.average}</span>
                        <br key={key}></br>
                        <h2 className="genre" key={item.id}>
                          {" "}
                          Genre{" "}
                          {item.genres.map((list) => (
                            <span className="genres">{list}</span>
                          ))}
                        </h2>
                        <br></br>
                        <span>premiered: {item.premiered}</span>
                        <br></br>
                        <span style={{ fontSize: "8px" }}>
                          {" "}
                          URL :{item.url}
                        </span>
                      </div>
                    </div>
                    {itemId !== item.id ? (
                      <img
                        ref={myRef}
                        key={item.id}
                        className={"poster-img"}
                        src={item.image.original}
                        alt={item.name}
                        onMouseEnter={hideImage}
                        onMouseLeave={showImage}
                      />
                    ) : (
                      " "
                    )}
                  </>
                }
              </div>
            );
          })}
        </div>
      ) : (
        "waiting..."
      )}
    </>
  );
}

export default DataCard;
