import React from 'react'
import { Database, Person, Rightarrow, bars } from '../Constant/icons'

function Topicon() {
  return (
    <div className='p-5 flex justify-between '>
        <div className='text-gray-500'>{Database}</div>
        <div className='text-gray-500'>{Person}</div>
        <div className='text-gray-500'>{bars}</div>
        <div className='text-gray-500'>{Rightarrow}</div>
        
    </div>
  )
}

export default Topicon