import { React, useEffect, useState } from 'react'
// import button from "./button"
import Button from './button'
// import api180 from "../utils/script.js"



// https://api.180daraga.com/api/events/startcourse/7-12/persons/C-1

const card = ({ pic, groups , id}) => {

  console.log(groups)
  return (
    <div className='flex flex-col border-4 w-[25vw] h-[50vh] align-middle m-5'>
      <center>      
        <img src={pic} alt="" className='w-[100px] h-[100px]' />
      </center>

      {
        groups.map((g) => {
          if (g) { return <Button groups={g} /> }
        }
        )

      }

    </div>
  )
}

// getNum()




export default card