import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Login from './pages/Login'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />}/>

          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
            </Route>

          </Route>

          
        </Routes>
        <Toaster position='bottom-right'/>
      </BrowserRouter>
    </>
  )
}

export default App
