import { useState } from 'react'
import './App.css'
import Main from './components/organisms/Main'
import { LifeCycleReact } from './views/LifeCycleReact';
import Comp1 from './components/organisms/Comp1';
import Users from './components/organisms/Users';

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
      <div style={{display: 'none'}}>
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
          <LifeCycleReact />
          <Comp1 color='red'>
            <h4>Estoy pasando este elemento h4</h4>
          </Comp1>
      </div>
      {/* <TraficLight /> */}
      <Users />
    </>
  )
}

export default App
 