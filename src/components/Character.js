import React from 'react';

const Character = (props) => {
  const {id, char, reading, clickHandler, leaving} = props;
  return (
    <span id={id} onClick={clickHandler} className={leaving ? 'char char-out' : 'char'}>
      {char}
      <span className='reading'>{reading}</span>
  </span>
  )
}

export default Character;