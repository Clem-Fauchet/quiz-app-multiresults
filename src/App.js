import React, { useState, useEffect } from 'react'
import './App.scss'

import Quiz from './components/Quiz'
// import quizQuestions from './api/quizQuestions'

// import Question from './components/Question'
// import QuestionCount from './components/QuestionCount'
// import AnswerOption from './components/AnswerOption'

function App() {
  const quizQuestions = [
    {
      question: 'What franchise would you rather play a game from?',
      answers: [
        {
          type: 'Microsoft',
          content: 'Halo',
        },
        {
          type: 'Nintendo',
          content: 'Pokemon',
        },
        {
          type: 'Sony',
          content: 'Uncharted',
        },
      ],
    },
    {
      question: 'Which console would you prefer to play with friends?',
      answers: [
        {
          type: 'Microsoft',
          content: 'X-Box',
        },
        {
          type: 'Nintendo',
          content: 'Nintendo 64',
        },
        {
          type: 'Sony',
          content: 'Playstation 1',
        },
      ],
    },
    {
      question:
        'Which of these racing franchises would you prefer to play a game from?',
      answers: [
        {
          type: 'Microsoft',
          content: 'Forza',
        },
        {
          type: 'Nintendo',
          content: 'Mario Kart',
        },
        {
          type: 'Sony',
          content: 'Gran Turismo',
        },
      ],
    },
    {
      question: 'Which of these games do you think is best?',
      answers: [
        {
          type: 'Microsoft',
          content: 'BioShock',
        },
        {
          type: 'Nintendo',
          content: 'The Legend of Zelda: Ocarina of Time',
        },
        {
          type: 'Sony',
          content: 'Final Fantasy VII',
        },
      ],
    },
    {
      question: 'What console would you prefer to own?',
      answers: [
        {
          type: 'Microsoft',
          content: 'X-Box One',
        },
        {
          type: 'Nintendo',
          content: 'Wii U',
        },
        {
          type: 'Sony',
          content: 'Playstation 4',
        },
      ],
    },
  ]

  const [state, setState] = useState({
    counter: 0,
    questionId: 1,
    questions: '',
    answerOptions: [],
    answer: '',
    answersCount: {},
    result: '',
  })

  useEffect(() => {
    const shuffledArray = (array) => {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    const shuffledAnswerOptions = quizQuestions.map((question) =>
      shuffledArray(question.answers)
    )

    setState({
      ...state,
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0],
    })
  }, [])

  const setUserAnswer = (answer) => {
    setState({
      ...state,
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    })
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1

    setState({
      ...state,
      counter: counter,
      questionId: state.questionId + 1,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answers: '',
    })
  }

  const handleAnswerSelected = (e) => {
    setUserAnswer(e.currentTarget.value)
    if (state.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300)
    }
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>React Quiz</h2>
      </div>
      <div className='App-container'>
        <Quiz
          answer={state.answer}
          answerOptions={state.answerOptions}
          questionId={state.questionId}
          question={state.question}
          questionTotal={quizQuestions.length}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
    </div>
  )
}

export default App
