import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import  HomePage  from './pages/HomePage'
import  NoteDetailPage  from './pages/NoteDetailPage'
import  CreatePage  from './pages/Create'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick={() => toast.success("congrats")} className="text-red-500 p-4 bg-pink-300">Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />

      </Routes>



    </div>
  )
}

export default App;
