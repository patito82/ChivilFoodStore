import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';


import { Button, MantineProvider } from '@mantine/core';
import { Demo } from './components/Demo';


function App() {
  const [count, setCount] = useState(0)


  return (
    <MantineProvider>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button variant="filled" color="red" size="lg" radius="xl">Button</Button><br></br>
      <Demo/>
    </MantineProvider>
  )
}


export default App



