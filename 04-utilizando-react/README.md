# Aula 4 - Sua primeira página com React
Nessa aula você vai ver como usar a biblioteca React pela primeira vez, criando elementos de forma dinâmica no HTML.

Atenção! Essa aula usa uma forma **não recomendada** de se trabalhar com o **React** apenas para introduzir a biblioteca e fazer isso de um modo mais simples. Durante todo o módulo usaremos o **JSX**, que hoje é forma **recomenda** de criar **componentes React**.

Tudo que precisamos para começar é ter uma página HTML simples com um **único requisito obrigatório**, um **ponto de partida** para o React, que nesse caso é a div #app. Será dentro desse elemento que o React irá fazer todo o trabalho de **montagem** e **desmontagem** dos componentes:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Primeira Página React</title>

  <style>
    #app {
      display: grid;
      font-family: sans-serif;
      height: 100vh;
      place-content: center;
    }
  </style>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

A primeira coisa a fazer é importar o React para nossa página. Para esse exemplo vamos usar uma CDN:
```html
<!DOCTYPE html>
<html lang="en">

<!-- ... -->

<body>
  <div id="app"></div>

  <script crossorigin src="<https://unpkg.com/react@18/umd/react.development.js>"></script>
  <script crossorigin src="<https://unpkg.com/react-dom@18/umd/react-dom.development.js>"></script>

</body>
</html>
```

Com o React e o ReactDOM importados, podemos usá-los em nosso próprio script para começar a criar elementos de forma dinâmica na página:
```html
<!DOCTYPE html>
<html lang="en">

<!-- ... -->
 
<body>
  <div id="app"></div>

  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script>
    const { createElement } = React

    const appDiv = document.getElementById("app")
    const root = ReactDOM.createRoot(appDiv)
    
    const h1 = createElement("h1", {}, "Olá, mundo!")
    const p = createElement("p", {}, "Estamos usando o React!")
    const main = createElement("main", {}, h1, p)
    
    root.render(main)
  </script>
</body>
</html>