import React from 'react'
import './App.scss'
import Question from './components/Question'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>React Quiz</h2>
      </div>
      <Question content='What is your favorite food?' />
    </div>
  )
}

export default App
