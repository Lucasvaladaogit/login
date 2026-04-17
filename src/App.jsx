import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='imagem' ></div>
      <div id='login'>
        <div id='formulario'>
          <img id='logo' src={logo} alt="" />
          <div className='usuario'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
