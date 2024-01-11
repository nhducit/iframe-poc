import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

localStorage.setItem('host-app-token', 'some-token')

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <iframe
        alt="adada"
        style={{
          height: 500,
          width: 500,
        }} src='http://localhost:5174/'
        sandbox='allow-downloads allow-forms allow-popups allow-scripts'
      >
      </iframe>
    </div>
  )
}

export default App
