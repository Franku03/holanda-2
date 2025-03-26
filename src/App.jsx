
import { useState } from 'react'
import './App.css'
import { InicialLayout } from './Components/InicialLayout'
import { MonthJourney } from './Components/Months/MonthJourney';

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
        : <MonthJourney /> 
      }

    </>
  )
}

export default App
