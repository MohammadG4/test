import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Card from "./components/card"
import pic1 from "./assets/c-6f5ff2bb.png"
import pic2 from "./assets/cpp-0580f82e.png"
import pic3 from "./assets/download.png"
import pic4 from "./assets/python-da72fccc.png"


function Home() {
  const [api, setApi] = useState(false)

  const runApi = () => {
    axios.get(`https://api.180daraga.com/api/events/startcourse/7-12/groups`)
      .then((res) => {
        setApi(res.data.message)
        console.log(res.data.message)

      })
  }


  useEffect(() => {
    runApi()
  }, [])
  if (!api) {
    return <>loading</>
  }
  return (
    <>
      <div className='flex justify-between flex-wrap gap[50px] border-black border-8 bg-cover bg-center bg-[url("https://startcourse24.180daraga.com/assets/SC24%20Cover-ac092aee.png")]'>
        
        <Card pic={pic1} id={0} groups={api.map(e => {
          if (e.group.split('-')[0] == "C"){

            return e.group
       
          }
          
        })} />
        <Card pic={pic2} id={1} groups={api.map(e => {
          if (e.group.split('-')[0] == "CPP"){
            return e.group
       
          }
          
        })} />
        <Card pic={pic3} id={2} groups={api.map(e => {
          if (e.group.split('-')[0] == "PS"){
            return e.group
       
          }
          
        })} />
        <Card pic={pic4} id={3} groups={api.map(e => {
          if (e.group.split('-')[0] == "Python"){
            return e.group
       
          }
          
        })} />
      </div>
    </>
  )
}

export default Home
