import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>here we learnig to use bootstrap in react </h1>
    <button type="button" class="btn btn-dark">Dark</button>
    </>
    
    
  )
}

export default App
