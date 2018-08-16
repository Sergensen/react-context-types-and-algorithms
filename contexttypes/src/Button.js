import React from 'react';
import ButtonContext from './ButtonContext';

export default function Button(props) {
  const { text, value } = props;

  return (
    <ButtonContext.Consumer>
      {btn =>
        <button value={value} type="button" style={btn.style} onClick={btn.handler}>
          {text}
        </button>
      }
    </ButtonContext.Consumer>
  );
}
