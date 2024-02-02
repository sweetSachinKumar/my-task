import React from 'react'
import TaskCard from '../components/TaskCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsPlus } from 'react-icons/bs'
const Home = () => {
  const data = useSelector(state => state.allTask.myTasks)

  return (
    <div className='py-12 container max-w-[1200px] mx-auto '>


      {/* <FormInp/>  */}
      {data === null ?
        <div className='h-[80vh] flex items-center justify-center w-full '>
          <div className='rounded-lg bg-indigo-600/80 p-5 sm:p-9  text-neutral-200 text-center text-xl shadow-lg' >
            <p className='mb-5 text-3xl md:text-5xl'>No any task</p>
            <Link to="/addtoTask" className='hover:underline cursor-pointer'>Create your Task</Link>
          </div>
        </div>
        :
        <div className='  w-full flex justify-end mb-9'>
          <Link to="/addtoTask" className='bg-neutral-700 hover:bg-neutral-700/90 active:bg-neutral-800/60 text-white px-4 py-1 rounded-md text-base sm:text-xl flex items-center gap-1 me-2 '><BsPlus size={22} /> add new Task</Link>
        </div>
      }

      <div>
      {data &&
        <div className='px-2 sm:px-4 sm:grid flex  flex-wrap justify-center grid-cols-1 sm:grid-cols-2 sm:gap-5 md:gap-7 md:grid-cols-3 gap-3 m-4 lg:grid-cols-4  '>

          {data?.map(task => <TaskCard task={task} key={task.id} />)}
        </div>
      }

 
</div>

    </div>
  )
}
 


export default Home
