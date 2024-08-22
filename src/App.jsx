import { createContext, useState } from 'react'
import './App.css'
import { DashboardWrapper } from './components/DasboardWrapper'
import "./style/bootstrap.min.css"
import "./style/bootstrap.bundle.min.js"

export const MyContext = createContext()

function App() {

  return (
    <MyContext.Provider>
      <div className='w-100' >
        <DashboardWrapper />
      </div>
    </MyContext.Provider>
  )
}

export default App
