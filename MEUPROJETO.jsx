// package.json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})

// index.html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hub de Consultas</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// src/App.jsx
import CNAESearch from './components/CNAESearch'
import StateSearch from './components/StateSearch'

function App() {
  return (
    <div className="app">
      <h1>Hub de Consultas</h1>
      <CNAESearch />
      <StateSearch />
    </div>
  )
}

export default App

// src/App.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  color: #333;
}

.app {
  max-width: 600px;
  margin: auto;
  padding: 2rem;
}

// src/components/CNAESearch.jsx
import React, { useState } from 'react'

export default function CNAESearch() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    alert(`Buscando CNAE: ${query}`)
  }

  return (
    <div>
      <h2>Consulta de CNAE</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o CNAE"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

// src/components/StateSearch.jsx
import React, { useState } from 'react'

export default function StateSearch() {
  const [state, setState] = useState('')

  const handleSearch = () => {
    alert(`Consultando estado: ${state}`)
  }

  return (
    <div>
      <h2>Consulta por Estado</h2>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Digite o estado"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
