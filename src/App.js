
import React from 'react'
import Output from './components2/Output'
import SignUp from './components2/SignUp'
import { Routes, Route,  BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
      <Routes>
        <Route  path="/"  element={<SignUp/>}/>
        <Route  path="/output"  element={<Output />}/>
      </Routes>
 )
}
