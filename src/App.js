import { useState,useEffect } from "react";
import axios from 'axios'




const url = 'https://api.tvmaze.com/shows'

function App() {

  const [data,setData] = useState([])
 


  console.log(data)

  useEffect(()=>{
    axios.get(url).then(res => {
      
      setData(res.data.splice(0,10))
    }).catch(err => console.log(err))
  },[])



  return (
    <div className="App">
     
      <>
        <div>
          {
            data?.map((item,key)=>{
              return(
                <>
                  <p>{item.name}</p>
                  <span> {item.genres}</span>
                </>
              )
            })
          }
        </div>
      </>

    </div>
  );
}

export default App;
