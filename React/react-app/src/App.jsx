import React from 'react'
import Footer from './Components/Footer/Footer'
import Headers from './Components/Header/Header'
import Body from './Components/Body/Body'




function App() {
  return (
    <div>
      <Headers/>
      
      <Body>
        <button>Click</button>
      </Body>

      <Body>
        <p>This is a paragraph</p>
      </Body>

      <Body/>

      <Footer/>
    </div>
  )
}

export default App
