import React from 'react'
import { Database } from '../../Constant/icons'

function MyinputComponent(props) {
  return (
    <div>
    <label className='flex gap-3 tetx-gray-600 text-base font-medium'>{Database} <div>{props.title}</div></label>
    <input type="text"  className='mt-2 rounded h-10 px-3 outline-none border border-gray-400 w-full '/>
    </div>
  )
}

export default MyinputComponent