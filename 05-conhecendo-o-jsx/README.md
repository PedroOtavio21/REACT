# Aula 5 - Conhecendo o JSX
JSX é uma extensão da linguagem JavaScript, possuindo recursos extras para o React. É também uma extensão de arquivo (Ex.: arquivo.jsx)

Não é entendido pelo navegador, deve ser compilado (pelo Babel, por exemplo) para ser entendido como o JavaScript comum.

É o formato usado pelo React para representar os elementos do DOM (Documento xml).

Facilita o processo de escrita do conteúdo que deve ser renderizado na tela.

Exemplo de documento jsx:
```jsx
const element = <h1>Olá, Mundo!</h1>

const anotherElement = (
    <div>
        <h1>Texto</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <h2></h2>
    </div>
)
```