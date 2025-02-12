import { useState } from 'react'
import './App.css'
import Main from './components/organisms/Main'

function App() {
  const [count, setCount] = useState(0);
  const [balones, setBalones] = useState(0);

  const addBalones = () => {
    if(balones=== 10){
      alert('No puede agregar más balones')
      return
    }
    setBalones(balones + 1)
  }

  return (
    <>
      Este el valor actual de count: {count}
      <br></br>
      <button
        onClick={() => {setCount(count + 1)}}>
        Sumar
      </button>
      <hr></hr>
      Este es el valor actual de balones: {balones}
      <button onClick={addBalones}>
        Agregar balones
      </button>
      <hr></hr>
      <Main />
    </>
  )
}

export default App
 