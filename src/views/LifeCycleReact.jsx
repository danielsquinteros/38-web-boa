import { useEffect } from "react";
import { useState } from "react"

export const LifeCycleReact = () => {
  const [text, setText] = useState('chao mundo');
  const [count, setCount] = useState(0)

  useEffect(() => {
    // console.log('->>< estoy montando')
      setTimeout(() => {
    setText('jeje mundo')
    }, 2000)
  },[])

  useEffect(() => {
    // console.log('si estoy funcionado solo que no entras a la condicional')
    if(count > 5 && count < 200){
        // console.log('entraste weee :o')
        setCount(count + 20)
    }
  }, [count])

  const addCount = () => {
    setCount(count + 1)
  }
  
  return (
    <>
        <div>
            {text.toUpperCase()}
            <div>LifeCycleReact</div>
        </div>
        <hr></hr>
        <p>
        {count}
        </p>
        <button onClick={addCount}>Agregar</button>
    </>
  )
}
