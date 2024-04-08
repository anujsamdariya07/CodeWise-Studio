import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import { About, Contact, Home, Login, SignUp } from './components/'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Account from './components/Account/Account.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={<Contact />} />
      <Route path='account' element={<Account />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)