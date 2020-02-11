import React from 'react'
import PropTypes from 'prop-types'

import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'

function Quiz(props) {
  return (
    <div className='quiz'>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className='answerOptions'>
        {props.answerOptions.map((item) => {
          return (
            <AnswerOption
              key={item.content}
              answerContent={item.content}
              answerType={item.type}
              answer={props.answer}
              questionId={props.questionId}
              onAnswerSelected={props.onAnswerSelected}
            />
          )
        })}
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
