# Aula 12 - Criando novos componentes no React
Nessa aula você vai aprender a criar novos componentes e a inclui-los em outros componentes, um dos conceitos mais importantes do React.

1. Vamos continuar no projeto da aula anterior, o **react-fundamentals**. No arquivo “App.jsx” nós vamos criar uma outra função chamada **Title**. Um componente React nada mais é do que uma função do JavaScript que retorna JSX, então podemos recriar nosso título h1 como um componente individual:

Obs.: os componentes do React, apesar de serem funções, são nomeados usando **CamelCase**, ou seja, letras maiúsculas no começo e em cada palavra. **É muito importante seguir esse padrão de nomenclatura.**

```js
function Title() {
  const tech = "React"
  return <h1>{tech} is awesome!</h1>
}

export default function App() {
	const tech = "React"
  const status = true

  return (
    <div>
      <h1>{tech} is awesome!</h1>
      <h2>It's easy, like 1 + 1 is {1 + 1}</h2>
      <h2>Current status: {status ? "ON" : "OFF" }</h2>
    </div>
  )
}
```

2. Para usar esse componente que criamos no nosso App.jsx só precisamos incluir uma **nova tag** com o **seu nome**, como uma tag html comum, mas com a diferença de que os nossos componentes começarão sempre com **letras maiúsculas**:
    
Obs.: repare que precisamos incluir a "/" de fechamento mesmo sendo uma tag única, isso é uma regra do JSX por ele ser baseado em XML (linguagem de marcação parecida com o HTML)

```js
function Title() {
  const tech = "React"
  return <h1>{tech} is awesome!</h1>
}

export default function App() {
  const status = true

  return (
    <div>
      <Title />
      <h2>It's easy, like 1 + 1 is {1 + 1}</h2>
      <h2>Current status: {status ? "ON" : "OFF" }</h2>
    </div>
  )
}
```

3. Certo, já sabemos como criar um novo componente. Mas uma outra prática comum do React é **separar cada componente** em **seu próprio arquivo** com o **mesmo nome do componente**, deixando nosso código mais organizado. Vamos fazer isso.

4. Crie um arquivo chamado “Title.jsx” e mova para ele o código do componente Title:
    
Obs.: lembre que precisamos exportá-lo para poder usá-lo no componente App.jsx.

```js
export default function Title() {
  const tech = "React"
  return <h1>{tech} is awesome!</h1>
}
```

5. Agora atualize o componente App.jsx para usar o novo componente:

```js 
import Title from "./Title"

export default function App() {
  const status = true

  return (
    <div>
      <Title />
      <h2>It's easy, like 1 + 1 is {1 + 1}</h2>
      <h2>Current status: {status ? "ON" : "OFF" }</h2>
    </div>
  )
}
```

6. 6. Para praticar vamos criar mais dois componentes, “Subtitle.jsx” e “StatusText.jsx”. Crie os arquivos e adicione neles suas respectivas funções:
    
Obs.: repare que qualquer função JavaScript é válida, inclusive arrow functions.
    
Subtitle.jsx
```js
const Subtitle = () => <h2>It's easy, like 1 + 1 is {1 + 1}</h2>

export default Subtitle
```

StatusText.jsx
```js
export default () => {
  const status = true
  return <h2>Current status: {status ? "ON" : "OFF" }</h2>
}
```

7. Agora atualize novamente o componente App.jsx:
```js
import StatusText from "./StatusText"
import Subtitle from "./Subtitle"
import Title from "./Title"

export default function App() {
  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
```

8. Antes de terminarmos, existe uma última **prática comum** do React. Ao invés de colocarmos todos os componentes “jogados” dentro da pasta “src” vamos criar uma pasta chamada **“components”** e movê-los para lá. Depois só precisaremos atualizar os imports no App.jsx:

```js
import StatusText from "./components/StatusText"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"

export default function App() {
  return (
    <div>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}
```

9. Outra forma comum de organizar os componentes é colocá-los em pastas com o **nome do componente** e chamar o arquivo em si de **“index.jsx”**. Isso acontece porque é comum termos **outros arquivos relacionados** a um componente específico e faz sentido eles ficarem todos dentro da mesma pasta. No entanto, como não precisamos disso, podemos continuar sem usar pastas para cada componente. Ex.: (Title.jsx, Title.css ou Title.scss)