import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button  = ({groups}) => {
  console.log(groups)
  const nav = useNavigate()
  function handleClick(){
    nav(`/group/${groups}`)
  }

  return (<>
    <button onClick={()=>{handleClick()}} className='border-4 mt-[50px] text-white'>{groups}</button>
    </>
  )
}

export default Button