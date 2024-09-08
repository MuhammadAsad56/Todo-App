import React from 'react'

const FilterButton = ({filterTodos, setFilterTodos}) => {
  return (
    <div className='flex align-center justify-around flex-wrap gap-3'>
            <button onClick={()=> setFilterTodos("All")} className= {`${filterTodos === "All" ? "bg-gray-500 text-white" : "bg-gray-300"} px-4 py-2`}>All</button>
            <button onClick={()=> setFilterTodos("Completd")} className= {`${filterTodos === "Completd" ? "bg-gray-500 text-white" : "bg-gray-300"} px-4 py-2`}>Completd</button>
            <button onClick={()=> setFilterTodos("Uncompletd")} className= {`${filterTodos === "Uncompletd" ? "bg-gray-500 text-white" : "bg-gray-300"} px-4 py-2`}>Uncompletd</button>
          </div>
  )
}

export default FilterButton