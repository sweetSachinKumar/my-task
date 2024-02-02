import React from 'react'
import { BiSolidEdit, BiSolidTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { EditTaskData, deleteAnyTask } from '../features/allTask'
import { Link } from 'react-router-dom'


const dateModifier = (myDate) => {
  const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const time = new Date(myDate)
  const month = time.getMonth()
  const year = time.getFullYear()
  const day = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const myTimes = `${monthsArr[month]}, ${day} ${year}, [${addZero(hour)}:${addZero(minute)}] `
  return myTimes
}

const addZero = (num) => {
  return num < 10 ? "0" + num : num
}

const handleDetailTaks = (id) => {
  console.log(id)
  const width = window.innerWidth
  if (width >= 1024) {

  } else {

  }
}

const TaskCard = ({ task, noBg }) => {

  const { title, description, priority, id, Dateis } = task
  const data = useSelector(state => state.allTask.myTasks)
  let classBG;
  switch (priority) {
    case "low":
      classBG = "shadow-green-200/30"
      break;
    case "medium":
      classBG = "shadow-indigo-600/30"
      break;
    case "high":
      classBG = "shadow-pink-500/30"
      break;

    default:

      break;
  }

  const dispatch = useDispatch()
  return (
    <div onClick={() => handleDetailTaks(id)} className={`border-2 border-slate-500/75 min-w-[190px] max-w-[260px]   group/task sm:w-full w-[200px] bg-violet-500 p-2 relative rounded-md pb-10  sm:pb-14 md:pb-16 shadow-xl ${!noBg ? classBG : "shadow-transparent z-[2000]"}`} >
      <div className='text-sm sm:text-base md:text-xl w-[80%] mb-2 text-slate-100 font-[Arial] font-semibold break-words'>{title}</div>
      <div className='  text-xs sm:text-sm md:text-base text-slate-200 break-words'>{description}</div>
      {/* <div className='text-sm sm:text-base md:text-xl w-[80%] mb-2 text-slate-100 font-[Arial] font-semibold break-words'>{title?.length >= 30 ? title?.substr(0, 28) + "..." : title}</div>
      <div className='  text-xs sm:text-sm md:text-base text-slate-200 break-words'>{description?.length >= 88 ? description?.substr(0, 84) + "..." : description}</div> */}

      <div className='flex gap-1 absolute top-2 right-1 mt-1 transition-all group-hover/task:mt-0 group-hover/task:opacity-100 duration-500 ps-1 opacity-0'>
        <Link to={"/editTask/" + id} className='sm:text-xl text-base text-white hover:text-green-300 p-1 cursor-pointer'>
          <BiSolidEdit />
        </Link>

        <span onClick={() => dispatch(deleteAnyTask({ id, data }))} className='sm:text-xl text-base text-white hover:text-red-300 p-1 cursor-pointer'>
          <BiSolidTrash />
        </span>
      </div>
      <div className='absolute text-xs sm:text-sm bottom-2 left-3 text-slate-300/90'>{dateModifier(Dateis)}</div>
    </div>
  )
}

export default TaskCard
