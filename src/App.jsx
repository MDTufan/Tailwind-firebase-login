
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Layout/Main';
import SingUp from './components/Singup/SingUp';
import SingIn from './components/SingIn/SingIn';

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
