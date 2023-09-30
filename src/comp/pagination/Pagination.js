import "./Pagination.css";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { pagination } from "../../featuresSlice/DataSlice";

function Pagination({ moviesList }) {

  const [index, setIndex] = useState(1);

  const dispatch = useDispatch()
  // const pageSelector = useSelector(state=>state.movieReducer.pageindex)

  // console.log(pageSelector)

  useEffect(() => {
    setIndex(Math.ceil(moviesList.length / 10) || 1);

  }, [moviesList]);

  const PageIndexHandler = (e)=>{
    
    dispatch(pagination(e))

    // setIndex(e)

  }
  
  return (
    <div className="pageDiv">
      {Array.from({ length: index}, (_, key) => (
        <button onClick={(e)=>PageIndexHandler(key+1)} key={key}>{key + 1}</button>
      ))}
    </div>
  );
}

export default Pagination;
