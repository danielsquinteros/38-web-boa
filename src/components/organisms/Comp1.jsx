import { useEffect } from "react";
import { useState } from "react";

/* eslint-disable react/prop-types */
function Comp1(props) {
    const { color, children } = props;
    const [message, setMessage] = useState('')
    
    const changeColor = () => {
      if(color === 'red'){
          return 'ff0000'
      }
      return '808080'
    }

    useEffect(
        () => {
            setTimeout(() => {
                setMessage('el mensaje cambio a los 3 segundos')
            }, 3000)
            setTimeout(() => {
                setMessage('el mensaje cambio a los 6 segundos')
            }, 6000)
            setTimeout(() => {
                setMessage('el mensaje cambio a los 9 segundos')
            }, 9000)

        },
        []
    )

    useEffect(() => {
        if(message === ''){
            return
        }
        // console.log('se cambio message')
    }, [message])

    const clickButton = () => {
        // console.log('-->> te moviste dentro del boton')
    }
     
    return (
      <>
         <div style={{backgroundColor: `#${changeColor()}`,height: '2px',width: 'auto'}}></div>
         {children ? children : <p>no viene ningun children</p>}
         <button onMouseMoveCapture={clickButton}>Hola</button>
         <div style={{backgroundColor: `#${changeColor()}`, height: '2px', width: 'auto'}}></div>
      </>
    )
  }
  
  export default Comp1
   