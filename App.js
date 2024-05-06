import { useState } from "react"
import Appnavigator from './Appnavigator'
import Index from "./index"
const App = () => {
  const [logstate, setlogstate] = useState(false)
  if (logstate)
    return <Appnavigator />
  else
    return <Index />
}

export default App

