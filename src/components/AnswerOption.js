import React from 'react'

function AnswerOption(props) {
  return (
    <div className='option'>
      <input
        type='radio'
        className='radioCustomButton'
        name='radioGroup'
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerContent}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className='radioCustomLabel' htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </div>
  )
}

export default AnswerOption
