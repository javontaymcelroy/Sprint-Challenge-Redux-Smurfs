import React from 'react';

function UpdateSmurf(props) {
  return (
    <div className='form'>
      <input
        type='text'
        name='name'
        onChange={props.onChange}
        value={props.name}
      />

      <input
        type='number'
        name='age'
        onChange={props.onChange}
        value={props.age}
      />

      <input
        type='text'
        name='height'
        onChange={props.onChange}
        value={props.height}
      />

      <button onClick={props.onClick} className='submit-btn'>
        Submit
      </button>
    </div>
  );
}

export default UpdateSmurf;
