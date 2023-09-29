
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Layout/Main';
import SingUp from './components/Singup/SingUp';
import SingIn from './components/SingIn/SingIn';
import About from './components/About/About';
import Priveate from './components/PrivateRoute/Priveate';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Main />,
      children:[
        {
          path:'/',
          element:<SingUp />
        },
        {
          path:'/singup',
          element:<SingUp />
        },
        {
          path:'/singin',
          element:<SingIn/>
        },
        {
          path:'/about',
          element:<Priveate> <About /> </Priveate>
        }
      ]
    }
  ]);
 

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
