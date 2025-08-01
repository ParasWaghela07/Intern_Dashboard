import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/leaderboard" element={<h1>Hello</h1>} />
    </Routes>
  )
}

export default App
