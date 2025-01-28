import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | Udayveer Singh </h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href='https://google.com' target= '_blank' >Visit Google</a>
)

const anotherUser = "Chai aur React"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Go to google ',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode> is only for developers and does nothing in UI.
  
  // <MyApp />
  // anotherElement
  // reactElement
  // <App/>
)
