import React from 'react';
import Button from './Button';

export default function ButtonBar(props) {
  return (
    <div>
      <Button {...props} value={1} text="Run bubblesort" />
      <Button {...props} value={2} text="Run fibonacci" />
      <Button {...props} value={3} text="Run binary" />
    </div>
  );
}
