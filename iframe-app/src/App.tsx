import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(
      'location', window.location
    )
  }, [])
  return (
    <>
      <div>iframe</div>
    </>
  )
}

export default App
