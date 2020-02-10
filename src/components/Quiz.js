import React from 'react'
import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'

function renderAnswerOptions(key) {
  return (
    <AnswerOption
      key={key.content}
      answerContent={key.content}
      answerType={key.type}
      answer={props.answer}
      questionId={props.questionId}
      onAnswerSelected={props.onAnswerSelected}
    />
  )
}

function Quiz() {
  return (
    <div className='quiz'>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className='answer-options'>
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  )
}

Quiz.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
}

export default Quiz
