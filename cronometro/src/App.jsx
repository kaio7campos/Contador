import { useState } from 'react'


function App() {
  const [value, setValue] = useState(0)

  return (
    <>
      <h1>Contador simples com react</h1>
      <h2>{value}</h2>
      <button className='btn' onClick={() => setValue(value + 1)}>Aumentar</button>
      <button className='btn' onClick={() => setValue(value - 1)}>Diminuir</button>
      <button className='btn' onClick={() => setValue(0)}>Reiniciar</button>
    </>
  )
}

export default App
