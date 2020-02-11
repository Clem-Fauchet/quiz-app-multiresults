import React, { useState, useEffect } from 'react'
import './App.scss'

import Quiz from './components/Quiz'
import quizQuestions from './api/quizQuestions'
import Result from './components/Result'

function App() {
  const [state, setState] = useState({
    counter: 0,
    questionId: 1,
    questions: '',
    answerOptions: [],
    answer: '',
  })

  const [currentAnswer, setCurrentAnswer] = useState({
    answersCount: {},
  })

  const [stateResult, setStateResult] = useState({
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

  const handleAnswerSelected = (e) => {
    setUserAnswer(e.currentTarget.value)

    if (state.questionId < quizQuestions.length) {
      setTimeout(() => setNextQuestion(), 300)
    } else {
      setTimeout(() => setResults(getResults()), 300)
    }
  }

  const setNextQuestion = () => {
    const counter = state.counter + 1

    setState({
      ...state,
      counter: counter,
      questionId: state.questionId + 1,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: '',
    })
  }

  const setUserAnswer = (answer) => {
    setCurrentAnswer((prevState) => ({
      answersCount: {
        ...prevState.answersCount,
        [answer]: (currentAnswer.answersCount[answer] || 0) + 1,
      },
    }))

    setState({
      ...state,
      answer: [answer],
    })
    console.log(currentAnswer)
    console.log(currentAnswer.answersCount)
  }

  const getResults = () => {
    const answersCount = currentAnswer.answersCount
    const answersCountKeys = Object.keys(answersCount)
    const answersCountValues = answersCountKeys.map((key) => answersCount[key])
    const maxAnswerCount = Math.max.apply(null, answersCountValues)

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    )
  }

  const setResults = (result) => {
    if (result.length === 1) {
      setStateResult({ ...stateResult, result: result[0] })
    } else {
      setStateResult({ ...stateResult, result: result[(0, 1)] })
    }

    console.log(result)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <h2>React Quiz</h2>
      </div>
      <div className='App-container'>
        {stateResult.result ? (
          <Result quizResult={stateResult.result} />
        ) : (
          <Quiz
            answer={state.answer}
            answerOptions={state.answerOptions}
            questionId={state.questionId}
            question={state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={handleAnswerSelected}
          />
        )}
      </div>
    </div>
  )
}

export default App
