# Aula 18 - O que são e como usar as “props”
Nessa aula você vai conhecer um recurso muito importante do React, as **props**. Elas nos permitem **passar argumentos** para os nossos componentes, tornando-os mais **flexíveis e dinâmicos**, o que facilita a sua reutilização.

## Como utilizar
1. Para isso vamos seguir utilizando o projeto do Card que criamos no Exercício 2. Atualmente temos 3 cards iguais na tela e queremos customizá-los para que sejam diferentes sem que precisemos criar componentes novos.

2. Para isso, vamos até o arquivo “index.jsx” do componente Card e vamos acrescentar um **parâmetro** à função chamado props:

Obs.: repare que, por ser um parâmetro, ele pode ter o **nome que quisermos**, mas o mais comum é usar o **nome “props”** mesmo.

```jsx
// ...

export default function Card(props) {
  return (
    // ...
  )
}
```

3. Esse primeiro parâmetro é padrão em todos os componentes React e **representa um objeto contendo todas os atributos passados na declaração do componente no JSX**, ou seja, assim como passamos atributos para elementos padrão do html nossos componentes serão capazes de **aceitar atributos**, cujos valores poderão ser usados **dentro do componente**.

4. Vamos agora ao arquivo “App.jsx” informar um título dinâmico para cada componente Card declarado:

```jsx
import Card from "./components/Card"

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      // Adiciona o atributo "title" dentro do componente Card
      <Card title="Pôster: Star Wars (1977)" />
      <Card title="Pôster: Empire Strikes Back (1980)" />
      <Card title="Pôster: Return of the Jedi (1983)" />
    </>
  )
}
```

5. E então só precisamos passar a utilizar a prop “title” do componente Card no lugar do título hard coded:

```jsx
import posterImg from "../../assets/sw-poster.jpg"
import styles from "./styles.module.css"

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>{props.title}</h2> // Adiciona a props dentro do título, definida em "App.jsx"
        <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}
```

6. Vamos fazer mais uma vez para praticar, dessa vez incluindo novas imagens. Primeiro, vamos importar as imagens no componente “App.jsx” e passá-las como props nos Cards:

Imagens utilizadas:
<img src="https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafa8f71e-b860-4ffe-80e8-840697b29b8e%2Fsw-poster.jpg?table=block&id=e9cff459-fed0-49b0-aea1-ed8530451fa1&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=290&userId=&cache=v2">

<img src="https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8eafc09a-0a73-4e31-b191-bd2a90872950%2Fesb-poster.jpg?table=block&id=f274b4ef-64ac-41a8-8a65-508e21adfbe1&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=290&userId=&cache=v2">

<img src="https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F79257c57-699e-4683-be54-8f39413b3601%2Frotj-poster.jpg?table=block&id=3f628b5c-c187-4aeb-b13c-bac9f7a93c06&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=290&userId=&cache=v2">

```jsx
import Card from "./components/Card"
import swPosterImg from "./assets/sw-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      // Adiciona o atributo poster dentro do componente Card
      <Card title="Pôster: Star Wars (1977)" poster={swPosterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={rotjPosterImg} />
    </>
  )
}
```

7. Depois, vamos substituir o conteúdo fixo do componente Card pelo valor de “props.poster”:

```jsx
import styles from "./styles.module.css"

export default function Card(props) {
  return (
    <div className={styles.container}>
      // Adiciona a props "poster" dentro do caminho da imagem, além do texto alternativo sendo o "title"
      <img className={styles.poster} src={props.poster} alt={props.title} /> 
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}
```

8. Um último detalhe que vale mencionar é que, além de usar o parâmetro “props” também é muito comum usar a desestruturação desse primeiro parâmetro para obter as props, evitando assim o uso de “props.” constantemente:

```jsx
import styles from "./styles.module.css"

// Adiciona uma desestruturação do objeto "props", contendo apenas suas propriedades
export default function Card({ title, poster }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}
```