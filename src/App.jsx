// import React from 'react'
import { createContext, useState } from 'react'
import './App.css'
import Popup from './Popup'
import './index.css'

const PopupContext = createContext()
function App() {
  const [show, setShow] = useState(false)
  
  return (
    <PopupContext.Provider value={{
      show,setShow
    }}>
    <div className="main">
      <div>
      <h2>My Finance</h2>
      <p>My Personal Finance Tracker</p>
      </div>
      <div>
        <button onClick={()=>setShow(!show)}>Add Transaction</button>
      </div>
    </div>
      <Popup/>
    </PopupContext.Provider>
  )
}

export default App