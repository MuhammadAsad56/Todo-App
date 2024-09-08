
import React, { useCallback, useState } from 'react';
import Modal from './modal';

function TodoList({ todos, onToggle, setTodos }) {
  const [modalTodoId, setModalTodoId] = useState(null);

  const closeModal = () => {
    setModalTodoId(null);
  };

  const handleDeleteTodo = useCallback((id) => {
    setTodos(todos.filter((data) => data.id !== id));
    setModalTodoId(null);
  },
    [todos, setTodos]
  );

  return (
    <>
      {todos.map((data) => {
        return (
          <div key={data.id}>
            <div className='flex flex-wrap align-center justify-between gap-3 bg-transparent my-3  shadow-lg'>
              <h3
                onClick={() => onToggle(data.id)}
                style={{ textDecoration: data.isCompleted && 'line-through' }}
                className='text-gray-100 text-2xl font-mono font-medium ml-2 cursor-pointer'
              >
                {data.todo}
              </h3>
              <button
                onClick={() => setModalTodoId(data.id)}
                className='rounded p-2 bg-red-400 mr-2'
              >
                Delete
              </button>
            </div>
            <div >
              {modalTodoId === data.id && (
                <Modal
                  data={data}
                  handleDeleteTodo={handleDeleteTodo}
                  closeModal={closeModal}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
