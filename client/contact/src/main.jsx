import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ContactList from './pages/contactList.jsx'
import ContactUs from './pages/contactUs.jsx'
import ThankYou from './pages/thankYou.jsx'

const router = createBrowserRouter([
  {
    path:'/ContactList',
    element:<ContactList/>,
  },
  {
    path:'/ContactUs',
    element:<ContactUs/>,
  },
  {
    path:'/ThankYou',
    element:<ThankYou/>,
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

