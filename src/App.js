import React, { Children } from 'react'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header/Header'
import Panel from './images/Panel/Panel'

function App() {
  return (
    <div  >
      <div className="grid grid-cols-7 gap-x-[1px]">
      <div className="col-span-1">
      <Dashboard/>
     </div>
     <div className="col-span-6">
     <Header/>
     <div>
      <Panel>
        {Children}
      </Panel>
      
      
     </div>
     </div>
      </div>
    
    </div>
  )
}

export default App