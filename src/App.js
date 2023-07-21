import React from 'react'
import User from './components/User'

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <User data={{name: "Umanga Shrestha", age: 22, profession: "student"}}/>
    </div>
  )
}

export default App
