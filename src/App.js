import React, { useState, useEffect } from 'react'
import './App.scss'

import Quiz from './components/Quiz'
import Question from './components/Question'
import quizQuestions from './api/quizQuestions'
import QuestionCount from './components/QuestionCount'

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h2>React Quiz</h2>
        <QuestionCount counter='1' total='6' />
        <Question content='What is your favorite food?' />
      </div>
    </div>
  )
}

export default App
