import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LoginPage from './pages/login.tsx';
import RegisterPage from './pages/register.tsx';
import UsersPage from './pages/user.tsx';
import ProductPage from './pages/product.tsx';
import './styles/global.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: 'users',
    element: <UsersPage />,
  },
  {
    path: "products",
    element: <ProductPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
