import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Student from "./Student.jsx"

const Docs = () => {
  const { id } = useParams();
  // console.log(id)
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

function getCount(){
  setCount(count ++)
  return count;
}



  useEffect(() => {
    axios.get(`https://api.180daraga.com/api/events/startcourse/7-12/persons/${id}`)
    .then((res) => {
      console.log(res)
      setData(res.data.message.sort((x,y)=>y.Score - x.Score))
      console.log(res)
    })
    

    .catch(function (error) {
      console.log(error);
    })

  }, [])

  if (!data) {
    return <>loading</>
  }
  return (
    <div>
      <h1>C++ COURSE<br />
        GROUP {id}</h1>
      {
        // .sort((x,y)=>x.score - y.score)
  data.map((e)=>{
    // {getCount}
  return <Student index={getCount} name={e.name} score={e.Score}/>
  })
}
      
    </div>
  )
}

export default Docs