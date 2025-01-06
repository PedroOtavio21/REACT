# Aula 6 - Conhecendo os Componentes do React
Componentes são **pequenos blocos** que compôem uma interface

Diferente do HTML tradicional, onde escrevemos a página inteira em um arquivo, **componentes** definem pequenos blocos **reutilizáveis** e **extensíveis**

<img src="https://onebitcode.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1100%2Fformat%3Awebp%2F1*V3ZOFh5Ed4MLCIgi6FnLmA.jpeg?table=block&id=370ac476-189a-4934-8ae7-40744249cd74&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=1420&userId=&cache=v2" width="350px">

## Vantagens:
Podem ser escritos uma vez e reutilizados várias vezes facilmente

Tornam o processo de modificar uma parte específica da interface muito mais fácil (ex.: mudar o componente de botão atualiza todos os botões da interface)

Deixa a estrutura de um projeto mais organizada, com cada arquivo responsável por uma pequena parte ao invés de toda uma página

Exemplo de componentização:
```jsx

// Diferente da nomenclatura de função padrão, os componentes são funções com seus nomes em pascal case!
function PrimaryButton(){
    return <button>Meu Botão</button>
}

// Além disso, são funções que sempre retornam um elemento html
function Container(){
    return (
        <div className="container">
            <h1>Olá, mundo!</h1>
            <p>Este é um componente do React!</p>
        </div>
    )
}