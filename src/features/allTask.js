import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    amount:1,
    myTasks: JSON.parse(localStorage.getItem("myAllTasks")) 
    

}

export const allTask = createSlice({
    name:'task-manager',
    initialState,
    reducers: {
        increment: (state)=> {
            state.amount +=2
        },
        addTasks:(state, action) => {   
            try{         
      
            let myarr = JSON.parse(localStorage.getItem("myAllTasks"))

           myarr.unshift(action.payload)
            
         
          let jsonArr = JSON.stringify(myarr) 
          localStorage.setItem("myAllTasks",jsonArr);
          state.myTasks = JSON.parse(localStorage.getItem("myAllTasks"))
          console.log("payld",action.payload)
          console.log( "state",state.myTasks)
          console.log( "modifiedArr",modifiedArr)
        } catch (err){
            console.log(err)
        }

        },
        deleteAnyTask:  (state, action) => {

          let myarr =  action.payload.data.filter(task => task.id !== action.payload.id)
          let jsonArr = JSON.stringify(myarr) 
          localStorage.setItem("myAllTasks",jsonArr);
          state.myTasks = JSON.parse(localStorage.getItem("myAllTasks"))
     
            console.log(state.myTasks)
        },
        EditTaskData: (state, action) => {
           let oldData = JSON.parse(localStorage.getItem("myAllTasks")).filter(task => task.id != action.payload.id)
           oldData.unshift(action.payload.data)
           localStorage.setItem("myAllTasks", JSON.stringify(oldData))

           state.myTasks = JSON.parse(localStorage.getItem("myAllTasks"))
     
        }

    }
})

export const {increment, addTasks,deleteAnyTask,EditTaskData} = allTask.actions
export default allTask.reducer