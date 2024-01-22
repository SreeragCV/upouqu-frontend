import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Contribute from './pages/Contribute.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header />,
      children: [
        {
          index: true,
          path: '',
          element: <Home/>
        },
        {
          path: 'books',
          element: <Books/>
        },
        {
          path: '/contribute',
          element: <Contribute/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
