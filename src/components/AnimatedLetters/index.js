import React from 'react'
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <>
      <span>
        {strArray.map((char, index) => {
          return (
            <span key={char + 1} className={`${letterClass} _${1 + idx}`}>
              {char}{' '}
            </span>
          )
        })}
      </span>
    </>
  )
}

export default AnimatedLetters
