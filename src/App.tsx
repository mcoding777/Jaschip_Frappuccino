import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 css={{
        all: 'unset'
      }}>직접 만드는 자바스크립트 문제들</h1>
    </>
  )
}

export default App
