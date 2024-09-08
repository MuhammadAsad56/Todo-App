// import React, { useCallback, useState } from 'react'
// import Modal from './modal'

// function TodoList({todos, onToggle , setTodos}) {
//   const [modal, setModal] = useState(false)

//   const closeModal = () =>{
//     setModal(false)
//   }

// const handleDeleteTodo = useCallback((id) => {
//     setTodos(todos.filter(data => data.id !== id))
//     setModal(false)
//   },[todos, setTodos])

//   return (
//     <>
//               {todos.map(data => {
//             return (
//               <>
//               <div key={data.id} className='flex justify-between bg-slate-50 my-2'>
//                 <h3 onClick={()=> onToggle(data.id)} style={{textDecoration : data.isCompleted && "line-through"}} className='text-2xl font-mono font-medium ml-2 cursor-pointer'>{data.todo}</h3>
//                 {/* <button onClick={()=> onDelete(data.id)} className='rounded p-2 bg-red-300'>Delete</button> */}
//                 <button onClick={()=> setModal(true)} className='rounded p-2 bg-red-300'>Delete</button>
//               </div>
//               {modal && (<Modal data={data} handleDeleteTodo={handleDeleteTodo} closeModal={closeModal}/>) }
//               </>
//             )
//            })
//            }
//     </>
//   ) 
// }

// export default TodoList


import React, { useCallback, useState } from 'react';
import Modal from './modal';

function TodoList({ todos, onToggle, setTodos }) {
  const [modalTodoId, setModalTodoId] = useState(null); // Track which todo's modal is open

  const closeModal = () => {
    setModalTodoId(null);
  };

  const handleDeleteTodo = useCallback( (id) => {
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
            {modalTodoId === data.id && (
              <Modal
                data={data}
                handleDeleteTodo={handleDeleteTodo}
                closeModal={closeModal}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
