import React, { useEffect } from 'react'

const TodoInput = ({onClick, onChange, todoValue}) => {

  return (
    <>
      <div className='flex flex-wrap gap-2 align-center justify-center my-3'>
          <input maxLength={30} value={todoValue} onChange={onChange} className=' border rounded-sm p-2' placeholder='Add Todo' type="text" />
          <button disabled={ todoValue.trim() == ""} onClick={onClick} className={`p-2 ml-2 ${todoValue.trim() == "" ? "bg-gray-300" : "bg-gray-500 text-white"}`}>Add</button>
        </div>
    </>
  )
}

export default TodoInput