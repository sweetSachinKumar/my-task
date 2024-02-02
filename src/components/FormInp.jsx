import React from 'react'
import {useForm} from 'react-hook-form'
import {useSelector, useDispatch} from 'react-redux'
import { addTasks } from '../features/allTask'
import "../App.css"
import { useNavigate } from 'react-router-dom'

const FormInp = () => {
 const {register, handleSubmit, formState:{errors}} = useForm()
 const lengtharr = useSelector(state => state.allTask.myTasks)
 const navigate = useNavigate()
console.log(lengtharr?.length)

 const dispatch = useDispatch()

 if(localStorage.getItem("myAllTasks")=== null){
  localStorage.setItem("myAllTasks",JSON.stringify([]))
 }

 const submit = async (data) => {
  let my_data = await data
  let arrTask = {id: Date.now(),Dateis:  Date.now()}
  arrTask = {...arrTask, ...my_data }
  dispatch(addTasks(arrTask))
  navigate("/")
 }


  return (
    <div className=' w-[90%] mt-10 max-w-[700px] mx-auto   py-5 rounded-lg px-6'>
      <form onSubmit={handleSubmit(submit)}>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="title">Title</label>
            <input type="text" className=' outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md placeholder:text-neutral-700/75 ' name="title" placeholder="enter your title" id="title" {...register('title', {
              required:"Title can not be empty"
            })} />
            {errors.title && <span className='text-green-700 -mt-1'>{errors.title.message}</span>}
       
        </div>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="details">Details</label>
            <textarea type="text" name="details" rows={5} className=' scrollingStyle h-full resize-none outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md placeholder:text-neutral-700/75 '  placeholder="enter your details" id="details" {...register("description", { required:"Details can not be empty"})} ></textarea>
            {errors.description && <span className='text-green-700 -mt-1'>{errors.description.message}</span>}
       
        </div>
        <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="priority">Priority level</label>
            <select className='outline-none bg-indigo-400/10 focus:bg-indigo-400/30 px-4 py-2 w-full rounded-md' name="priority" id="priority" {...register("priority", {required:"how much is priority level of this task ?"})}>
                <option value="">--- your priority level ---</option>
                <option value="low" className='bg-green-200/30'>low</option>
                <option value="medium" className='bg-green-300'>medium</option>
                <option value="high" className='bg-red-500/75 '>high</option>
            </select>
            {errors.priority && <span className='text-green-700 -mt-1'>{errors.priority.message}</span>}
        </div>
        <div>
            <button type="submit" className='bg-yellow-400 py-1 px-9 rounded-xl mt-6 hover:bg-yellow-400/90 active:hover:bg-yellow-500/80'>Add tasks</button>
        </div>
      </form>
    </div>
  )
}

export default FormInp
