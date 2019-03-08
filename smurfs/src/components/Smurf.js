import React from 'react';
import './App.css';

function Smurf(props) {
  return (
    <div className='smurfCard'>
      <p className='smurfname'>{props.name}</p>
      <div className='smurf-info'>
        <p className='smurf-text'>{props.age} years old</p>
        <p className='smurf-text'>|</p>
        <p className='smurf-text'> {props.height} tall</p>
      </div>
      <button
        id={props.id}
        onClick={() => {
          props.update(props.id);
        }}
        className='up-button'
      >
        Update
      </button>
      <button
        onClick={() => props.deleteSmurf(props.id)}
        className='del-button'
      >
        Delete
      </button>
    </div>
  );
}

export default Smurf;
