import React from 'react'

const ToDoItem = ({text, onChecked, id}) => {
  return (
    <li onClick={() => onChecked(id)}>{text}</li>
  )
}

export default ToDoItem