import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function CountButton({count, onClick}: {count: number, onClick: () => void}) {

  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <h1>React Task Manager</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <CountButton count={count} onClick={handleClick}/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
