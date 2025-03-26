import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {

  const [count, SetCount] = useState(0);

  const onClickButton = (value) => {
    SetCount(count + value)
  }


  return (
    <div className='App'>
    <h1>Simple Counter</h1>

    <section>
      <Viewer count={count} />
    </section>

    <section>
      <Controller onClickButton={onClickButton}/>
    </section>

    </div>
  )
}

export default App
