import React from 'react'
import './assets/css/style.css'
import LogIn from './components/LogIn'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <div className="signup">
          <LogIn />
        </div>
      </div>
    </div>
  )
}

export default App
