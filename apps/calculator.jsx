//Adri, he creado este archivo de nuevo. Aqui podriamos meter la calculadora
import {useState} from 'react'

const Calculator = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(null)

    const calculate = (module) => {
        const modules = {
          sum: () => setResult(number1 + number2),
          subtraction: () => setResult(number1 - number2),
          multiplication: () => setResult(number1 * number2),
          divide: () => setResult(number2 !== 0 ? number1 / number2 : 'Error'),
        }
      
        modules[module] ? modules[module]() : setResult(null)
      }
      return (
        <div className="calculator">
          <input type="number" value={number1} onChange={(e) => setNumber1(Number(e.target.value) || 0)} />
          <input type="number" value={number2} onChange={(e) => setNumber2(Number(e.target.value) || 0)} />
          <button onClick={() => calculate('sum')}>+</button>
          <button onClick={() => calculate('substraction')}>-</button>
          <button onClick={() => calculate('multiplication')}>*</button>
          <button onClick={() => calculate('divide')}>/</button>
          <p>Resultado: {result ?? '0'}</p>
        </div>
      )
}

export default Calculator;