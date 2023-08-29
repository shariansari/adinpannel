import React from 'react'
import Topicon from './Topicon'
import MiddelPart from './MiddelPart'


function DashboardLeftBar() {
   
  return (
    <React.Fragment>
        <div className="bg-gray-800 h-[100vh]">
            <Topicon/>
            <MiddelPart/> 
        </div>
    </React.Fragment>
  )
}

export default DashboardLeftBar