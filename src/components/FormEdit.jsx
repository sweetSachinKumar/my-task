import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { EditTaskData } from '../features/allTask'

const FormEdit = () => {
  const [comingData, setComingData] = useState({title:"",description
  :"",priority:""})
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const data = useSelector(state => state.allTask.myTasks)
  const urlId = useParams()
  console.log(comingData)

  const OnChange = (e)=> {
    setComingData({...comingData, [e.target.name]:e.target.value})
    console.log({[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTaskData = {...comingData, Dateis: Date.now()}
    dispatch(EditTaskData({id:newTaskData.id, data:newTaskData}))
    // console.log(newTaskData.id)
    navigate("/")
  }


  useEffect(()=> {
    const dataCame = data?.find(task => task.id === Number(urlId.id))
    console.log(dataCame)
    setComingData({...dataCame})

  },[])
  return (
    <>
       <div className=' w-[90%] mt-10 max-w-[700px] mx-auto  py-5 rounded-lg px-6'>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="title">Title</label>
            <input type="text" required className=' outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md placeholder:text-neutral-700/75 ' name="title" placeholder="enter your title" id="title" value={comingData.title}  onChange={OnChange} />
           
       
        </div>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="description">Details</label>
            <textarea type="text" required name="description" rows={5} className=' scrollingStyle h-full resize-none outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md placeholder:text-neutral-700/75 '  placeholder="enter your Details" id="description" value={comingData.description
} onChange={OnChange}></textarea>
            
        </div>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="priority">Priority level</label>
            <select required  className='outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md' name="priority" id="priority" value={comingData.priority} onChange={OnChange}>
            <option value="">--- your priority level ---</option>
                <option value="low" className='bg-green-200/30'>low</option>
                <option value="medium" className='bg-green-300'>medium</option>
                <option value="high" className='bg-red-500/75 '>high</option>
            </select>
          
        </div>
        <div>
            <button type="submit" className='bg-yellow-400 py-1 px-9 rounded-xl mt-6 hover:bg-yellow-400/90 active:hover:bg-yellow-500/80'>save tasks</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default FormEdit
