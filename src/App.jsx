// import React from 'react'
import { useState } from 'react'
import './App.css'
import Popup from './Popup'
import './index.css'
import ShowContext from './hooks/ShowContext'
import Transaction from './Transaction'

 

function App() {
  const [show, setShow] = useState(false)
  
  return (
   <ShowContext.Provider value={{show,setShow}}>
    <div className="main">
      <div>
      <h2>My Finance</h2>
      <p>My Personal Finance Tracker</p>
      </div>
      <div>
        <button onClick={()=>setShow(!show)}>Add Transaction</button>
        </div>
    </div>
      <Transaction/>
      <Popup/>
   </ShowContext.Provider>
    
  )
}

export default App;