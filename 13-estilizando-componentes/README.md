# Aula 13 - Estilizando componentes
Nessa aula você vai aprender algumas das diferentes formas de se **estilizar um componente React**. Existem muitas formas de trabalhar a estilização de um componente, por isso essa aula vai ser focada apenas nas mais simples, que não necessitam de nenhuma biblioteca e usam **apenas CSS** e o **próprio React**.

1. Continuaremos trabalhando no projeto das últimas aulas. A primeira forma, e talvez a mais simples, é **utilizar o CSS tradicional**. O Vite já vem configurado para entender arquivos CSS, então só precisamos criar um arquivo e importá-lo no JavaScript para que ele passe a funcionar.

2. Vamos começar aprendendo a usar **estilos globais**, ou seja, que se aplicam em **todas as partes da aplicação**. Dentro de “src”, crie uma pasta “styles” e dentro dela um arquivo “globals.css” com o seguinte conteúdo:
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

h1 {
  font-size: 3rem;
}

h2 {
  color: #f64348;
  font-size: 2rem;
}
```

3. Agora vamos **importar** esse arquivo em **“main.jsx”**. Por ser o arquivo principal que renderiza toda a aplicação os estilos estarão disponíveis globalmente:
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/globals.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

4. Com isso temos o arquivo CSS aplicado na página.

5. Agora vamos à segunda forma de estilização, os estilos *inline*. O React permite que estilizemos nossos elementos diretamente na declaração do componente usando o atributo **style**. Vamos mudar o visual da div principal do app dessa forma:
    
Obs.: repare que, como estamos na “terra” do JavaScript, seguimos as suas regras, então **as propriedades do CSS precisam usar camelCase, strings para os valores e serem separadas por vírgula.**

```jsx
import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#2c2c2d",
        display: "grid",
        minHeight: "100vh",
        placeContent: "center",
        textAlign: "center"
      }}
    >
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
```

6. Para praticar, vamos estilizar também o componente “Title.jsx”:
```jsx
export default function Title() {
  const tech = "React"
  return <h1 style={{ color: "#e5e5e5" }}>{tech} is awesome!</h1>
}
```

7. E agora o componente “Subtitle.jsx”:
    
Obs.: repare que os estilos inline tem **prioridade** sobre os estilos globais.
    
Obs².: repare também que os estilos inline **se limitam ao escopo do componente**, não sendo aplicados ao outro elemento h2 da página.

```jsx
const Subtitle = () => (
  <h2
    style={{ color: "#e5e5e5" }}
  >
    It's easy, like 1 + 1 is {1 + 1}
  </h2>
)

export default Subtitle
```

8. Por fim, vamos estilizar o componente “StatusText.jsx” e ver como definir estilos baseados em valores do JavaScript. Se o status for verdadeiro a cor deve ser verde e se for falso deve ser vermelho:
```jsx
export default () => {
  const status = true
  return (
    <h2
      style={{
        color: status ? "#00ff9f" : "#f64348"
      }}
    >
      Current status: {status ? "ON" : "OFF" }
    </h2>
  )
}
```

9. E é assim que utilizamos os estilos inline.

10. A última forma que vamos ver será através dos **CSS Modules**. CSS Modules são arquivos **css especiais**, com nome no formato “.module.css” e que podem ser importados como **módulos** dentro do **JavaScript**. A partir daí podemos usá-los como um objeto javascript no nosso código.

11. Vamos criar o arquivo “App.module.css” na pasta “src”. Dentro dele escrevemos CSS normalmente, aplicando os mesmos estilos que aplicamos ao componente anteriormente:
```css
.app {
  background-color: #2c2c2d;
  display: grid;
  min-height: 100vh;
  place-content: center;
  text-align: center;
}
```

12. Agora usamos esses estilos dentro do arquivo JSX como um módulo do JavaScript:
```jsx
import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
```

13. Usando os CSS Modules conseguimos separar a estilização do resto do componente, deixando nosso código bem mais organizado, porém sem perder as vantagens de interagir com os estilos usando JavaScript de forma facilitada.