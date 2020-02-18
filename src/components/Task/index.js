import React from 'react';

const Task = (props) => {
    return (
        <ul>
          {
              props.items.map(item => {
                  return <li>{item}</li>;
              })
          }
        </ul>
    );
};

export default Task;