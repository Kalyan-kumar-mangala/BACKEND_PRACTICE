import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  async function getData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data.facts);
    
  }

  function changeTheme() {
    setIsDarkMode((prevMode) => {
      const nextMode = !prevMode
      document.body.style.backgroundColor = nextMode ? '#222' : '#fff'
      document.getElementById('text').style.color = nextMode ? '#fff' : '#222'
      return nextMode
    })
  }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 id="text">Backend Practice</h1>
        <button
          onClick={getData}
          style={{ minWidth: '120px', padding: '8px 12px', margin: '8px auto', display: 'block' }}
        >
          Get Data
        </button>
        <button
          onClick={changeTheme}
          style={{ minWidth: '120px', padding: '8px 12px', margin: '8px auto', display: 'block' }}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        {data && <p>{data}</p>}
      </div>
    </>
  )
}

export default App
