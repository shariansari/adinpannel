import React, { Children } from 'react'
import Sidebar from '../../Dashboard/Sidebar'
import Content from './Content'

function Panel() {
  return (
    <div className="p-5 flex gap-x-5">
     <Sidebar/>
     <div className="mt-[50px] ml-[250px] w-[1020px]">
      <Content>{Children}</Content>
     </div>
    </div>
  )
}

export default Panel