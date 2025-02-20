import { useEffect } from "react"
import { useState } from "react"

const TraficLight = () => {
  const [colorTrafic, setColorTrafic] = useState('green')
  const [message, setMessage] = useState('red')

  const colors = {
    'red': '#F24822',
    'green': '#66D575',
    'yellow': '#FF9E42'
  }

  useEffect(() => {
    if(colorTrafic === 'green'){
      setMessage('Los autos pueden pasar')
    }
    if(colorTrafic === 'yellow'){
      setMessage('Personas alistense para pasar')
    }
    if(colorTrafic === 'red'){
      setMessage('Detener autos y pasar personas')
    }
  }, [colorTrafic])

  const changeTraficLight = () => {
    setColorTrafic('yellow')
    setTimeout(() => {
      setColorTrafic('red')
    }, 3000)
    setTimeout(() => {
      setColorTrafic('green')
    }, 6000)
  }
  

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={changeTraficLight} disabled={colorTrafic !== 'green'}>Detener autos</button>
      <div>
        <div style={{backgroundColor: colors[colorTrafic], height: '100px', width: '100px', borderRadius: '100%'}}></div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default TraficLight