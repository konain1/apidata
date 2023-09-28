import "./Pagination.css";
import { useEffect, useState } from "react";

function Pagination({ pageNo }) {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setIndex(Math.ceil(pageNo.length / 10) || 1);
  }, [pageNo]);

  return (
    <div className="pageDiv">
      {Array.from({ length: index }, (_, key) => (
        <button key={key}>{key + 1}</button>
      ))}
    </div>
  );
}

export default Pagination;
