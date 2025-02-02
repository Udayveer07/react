import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (character) str += "!@#$%^&*(){}[]|\?/"

    for (let i = 1; i <= length; i++) {
      let character = Math.floor(Math.random() * str.length + 1) ;
      pass += str.charAt(character)
    }

    setPassword(pass)

  }, [length, numAllowed, character,setPassword])

  const copypasswordonClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
  },[password])


    useEffect(() => {
    passwordGenerator()
    }, [length, numAllowed, character, passwordGenerator])
  
   return (
    <> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden '> 
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="col-span-2 text-white font-medium text-sm w-full sm:w-auto py-2 px-2.5 text-center dark:bg-blue-600  items-center inline-flex  hover:bg-blue-500  justify-center active:bg-blue-800"  onClick={copypasswordonClipboard}>Copy</button>
         </div>
         
         <div className='text-sm gap-x-2 flex   '>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            /><label>Length({length})</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
             type="checkbox"
             defaultChecked={numAllowed}
             id = "numberInput"
             onChange={() => { setNumAllowed((prev) => !prev) }}
           /><label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked ={character}
            id="characterInput"
            onChange={() => { setCharacter((prev) => !prev) }}
            /><label htmlFor='characterInput'>Characters</label>
          </div>
       
          
        </div>
      </div>
    </>
  )
}

export default App
