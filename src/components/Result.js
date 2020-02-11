import React from 'react'
import PropTypes from 'prop-types'

function Result(props) {
  return (
    <div className='result'>
      <h2>
        You prefer <strong>{props.quizResult}</strong>
      </h2>
    </div>
  )
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
}
export default Result
