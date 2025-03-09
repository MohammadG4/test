import React from 'react'

const Student = ({index,score,name}) => {
  return (
    <div className='flex justify-center border-4 mt-5'>
      <h1> {index},{score} ,{name}</h1>
    </div>
  )
}

export default Student