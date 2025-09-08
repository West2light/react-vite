import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import LoginPage from './pages/login.tsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/user.jsx';
import BookPage from './pages/book.tsx';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp.tsx';
import ErrorPage from './pages/erorr.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: "books",
        element: <BookPage />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    < RouterProvider router={router} />
  </React.StrictMode>,
)
