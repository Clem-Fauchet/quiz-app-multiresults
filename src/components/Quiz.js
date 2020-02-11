import React from 'react'

import Question from './Question'
import QuestionCount from './QuestionCount'
import AnswerOption from './AnswerOption'

function Quiz(props) {
  return (
    <div className='quiz'>
      <QuestionCount counter={props.questionId} total={props.questionTotal} />
      <Question content={props.question} />
      <ul className='answerOptions'>
        {props.answerOptions.map((key) => {
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
        })}
      </ul>
    </div>
  )
}

export default Quiz
