import React from 'react';
import './App.css';

function AddSmurf(props) {
  return (
    <div className='form'>
      <input
        type='text'
        name='name'
        onChange={props.onChange}
        placeholder='name'
      />

      <input
        type='number'
        name='age'
        onChange={props.onChange}
        placeholder='age'
      />
      <input
        type='text'
        name='height'
        onChange={props.onChange}
        placeholder='height'
      />

      <button onClick={props.onClick} className='submit-btn'>
        Submit
      </button>
    </div>
  );
}

export default AddSmurf;
