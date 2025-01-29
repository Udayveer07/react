import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "udayveer",
    age: 18
  }
  let newArr = [1, 2, 3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind test</h1>

      <Card year="2024" buttonTxt = "Aur Janiye"/>
      <Card year="2025" buttonTxt = "More Info"/>
    </>
  )
}

export default App
