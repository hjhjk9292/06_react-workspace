import { useState } from 'react';
import './App.css'
import Result from './components/Result'
import Select from './components/Select'

function App() {
  const [color, setColor] = useState("빨강");
  const updateColor = (c) => {
    setColor(c);
  };
  return (
    <>
     <Select color={color} updateColor={updateColor} />
     <Result color={color} />
    </>
  )
}

export default App
