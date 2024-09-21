import React from 'react'
import Left from './Left'
import Right from './Right'


function Main() {
  return (
    <>
      <div className='main w-screen h-screen lg:grid grid-cols-4 grid-rows-1 '>
        <Left/>
        <Right/>
      </div>
    </>
  )
}

export default Main
