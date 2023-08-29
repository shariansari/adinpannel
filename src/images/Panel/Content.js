import React from 'react'
import MyinputComponent from '../../Components/MyinputComponent/MyinputComponent'

function Content() {
  return (
    <div className='mt-5' >
        <div className='text-lg font-bold text-gray-700'>OVERVIEW</div>
        <div className='mt-5'>
        <div className='grid grid-cols-2 gap-5' >
        <MyinputComponent title="Property Name"/>
        <MyinputComponent title="Property Status"/>
        <MyinputComponent title="Property URL"/>
        <MyinputComponent title="Property Region"/>
        <MyinputComponent title="Property ID"/>
        <MyinputComponent title="Ticket Forwarding Email"/>
        Title pass jese kiya h vese hi value pass krdo placeholder or type or jo bhiv cahiye or hr jagh isi input ko use karo or file uplod vala bgi asani se ho jaega vo bhi choose file searcg kr lena gpt p  or icon bhi pass krdo props m pass krdo 
        or jis trah se mene Accordion m child pass kiya wahi se url bhi pass kr do navigation k lie 
            
        </div>

        </div>
    </div>
  )
}

export default Content