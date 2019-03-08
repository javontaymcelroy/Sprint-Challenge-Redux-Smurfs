import React from 'react';
import './App.css';

function Smurf(props) {
  return (
    <div className='smurfCard'>
      <p className='smurfname'>{props.name}</p>
      <p>{props.age} years old</p>
      <p> {props.height}</p>
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
