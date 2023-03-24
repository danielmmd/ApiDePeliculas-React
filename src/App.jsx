import { useState } from 'react'
import { Movies } from './Components/Movies'



function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <header>
        <h1>Peliculas Estrenos</h1>
      </header>
      <main>
        <Movies/>
      </main>
  </div>)
}

export default App
