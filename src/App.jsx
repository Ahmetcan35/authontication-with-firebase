import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RouterConfig from './config/RouterConfig'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <RouterConfig />
      <ToastContainer position='top-right' autoClose={2000} />
    </>
  )
}

export default App
