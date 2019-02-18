import React from 'react';

const ToDo = ({todos, deleteItem}) => {

  const todoList = (todos.length > 0) ? (
    todos.map(todo => {
      return(
        <div className='collection-item'  key={todo.id} onClick={() => {deleteItem(todo.id)}}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <div className='collection-item'> You have no to do's left </div>
  )

  return (
    <div className="collection">
      { todoList }
    </div>
  );
}
export default ToDo;
