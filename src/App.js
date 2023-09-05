import { useState,useEffect } from "react";
import axios from 'axios'
import DataCard from "./comp/DataCard";




const url = 'https://api.tvmaze.com/shows'

function App() {

  const [data,setData] = useState([])
 


 

  useEffect(()=>{
    axios.get(url).then(res => {
      
      setData(res.data.splice(0,9))
    }).catch(err => console.log(err))
  },[])



  return (
    <div className="App">
     
      <>
      { data.length > 0 ? <DataCard data={data}/> : 'loading .....'} 
      </>

    </div>
  );
}

export default App;
