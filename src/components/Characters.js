import React from 'react';
import Char from '../containers/Char';

const Characters = (props) => {
  const {hiragana, clickHandler} = props;

  return (
    <div className='hiraganas'>
    {hiragana.map((char, i) => {
      return <Char onClick={clickHandler} key={Math.random()} id={char[1] + char[2] + i} index={i} char={char[0]} reading={char[1]} end={char[2]}/>
    })}
  </div>
  )
}

export default Characters;