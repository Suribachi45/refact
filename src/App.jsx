import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import lodearriba from './top'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [agrupar, sumarMas] = useState(1)
  const [contabilizar, quitar] = useState(0)

  
  
    var patata1 = 1 
    var almacenamiento = [];
    for (var i = 0; i < movidas.length; i++) {
      almacenamiento.push(
        <div key={i}>
          <p>Nombre: {movidas[i].name}</p>
          <p>Apellidos: {movidas[i].lastName}</p>
          <p>Hobbies: {movidas[i].hobbies.join(', ')}</p>
          <p>Edad: {movidas[i].age}</p>
        </div>
      );
    }

    var patata2 = 2
    var resultadopatata = patata1+patata2 
   
  return (
    // tengo que poner aquí el logo en lo de arriba. Que no se me olvide
    <div className="envoltura">
      {almacenamiento}
      {/* <Form> */}
      {/* {suma} --> clacula la suma de los dos elementos que hay en los inputs */}
      {resultadopatata}
      {cocreta} 
      {/* ejemplo para cambiar luego patata por el resultado que tengo que guardar en las variables para que haga la suma. Puedo usar las mismas variables para el resto */}
      {/* <button>Aquí tiene que enviar algo para que funcione</button>
      </Form> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
    /* <pie /> */
  )
}

export default App
