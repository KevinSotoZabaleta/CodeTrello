import { useState } from 'react'
import TrelloList from './components/TrelloList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>TEST</h1> */}
      <TrelloList/>
    </>
  )
}

export default App
