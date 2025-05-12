import { useState } from 'react'
import './css/tweet.css';
import Tweet from './components/tweet.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tweet/>
    </>
  )
}

export default App
