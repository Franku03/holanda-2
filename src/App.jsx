
import { useState } from 'react'
import { EncitiNeedsHelp, InicialLayout } from './Components';

import './App.css'

function App() {

  const [isInitiating, setIsInitiating] = useState(true);

  const changeInitialLayout = () => {
    setIsInitiating(!isInitiating);
  }

  return (
    <>

      {
        ( isInitiating ) 
        ? <InicialLayout changeInitialLayout={ changeInitialLayout } />
        : <EncitiNeedsHelp /> 
      }

    </>
  )
}

export default App
