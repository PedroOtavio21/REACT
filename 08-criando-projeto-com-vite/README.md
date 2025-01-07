# Criando um projeto React com Vite 
1. Comece criando um novo projeto Vite:

```npm
npm create vite@latest
```

2. Nomeie o projeto como **“first-react-project”**

3. Na parte de framework, selecione **“React”**

4. Na parte de variante, selecione **“JavaScript”**

5. Acesse o diretório criado, instale as dependências e depois abra-o com o VS Code:

```npm 
cd first-react-project
npm install
code .
​
```

6. Na pasta “src”, exclua todo o conteúdo e mantenha apenas os arquivos “App.jsx” e “main.jsx” com o seguinte conteúdo:

- App.jsx

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
    </div>
  )
}
```

- main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

7. Execute o projeto:

```npm
npm run dev
```

8. Acrescente o seguinte código ao componente “App.jsx” e veja o navegador atualizar automaticamente:

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Olá, mundo!</h1>
      <p>Este é meu primeiro projeto usando React e Vite!</p>
      <p>Próximos passos:</p>
      <ul>
        <li>Praticar com exercícios</li>
        <li>Aprender a usar dados dinâmicos</li>
        <li>Criar novos componentes</li>
        <li>Estilizar os componentes</li>
        <li>Reutilizar componentes</li>
      </ul>
    </div>
  )
}
```