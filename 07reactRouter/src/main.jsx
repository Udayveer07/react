import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { GithubInfo } from './components/Github/Github.jsx'


// First method to create router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'About',
//         element: <About/>
//       },
//       {
//         path: 'ContactUs',
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// Second method to create router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='ContactUs' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route
        loader={GithubInfo}
        path='Github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
