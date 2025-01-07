# Aula 11 - Dados dinâmicos no JSX
A partir desta aula, iremos iniciar pra valer os estudos com as principais ferramentas da biblioteca!

## Dados dinâmicos
Basicamente, o React permite que sejam exibidos dados de maneira dinâmica dentro do JSX, sejam eles variáveis ou expressões javascript

Exemplo:
```jsx
function sum(a, b){
  return a + b
}

export default function App() {
  const tech = "JavaScript"
  const status = true
  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>It´s easy. Like 1 + 1 is {sum(1,1)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}
```
