import React from 'react'
import { Person } from '../Constant/icons'

function Header() {
  return (
    <div className='grid grid-cols-6 gap-x-[1px]  fixed' style={{ width: "calc(100% - 214px)" }}>
        <div className="bg-gray-900 text-white font-medium p-4 col-span-1">
           https://test//layout
        </div>
        <div className="bg-gray-900 text-white font-medium p-4 col-span-5">
          <div className="flex justify-between"> 
            <div className="flex gap-x-5">
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
            </div>
            <div className="flex gap-x-5 pr-5">
                <div>{Person}</div>
                <div>{Person}</div>
                <div>{Person}</div>
               
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header