import './App.css'
import useCounter from './hooks/useCounter'

// Regra 1: Onde usar os Hooks (Apenas dentro de um componente React)
// Regra 2: Ordem dos Hooks

function App() {
  // const counter = useCounter()
  const { count, increment } = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App