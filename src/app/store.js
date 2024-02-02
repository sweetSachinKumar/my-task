import {configureStore} from "@reduxjs/toolkit"
import allTask from "../features/allTask";
const store = configureStore({
    reducer:{
        allTask: allTask

    }
})

export default store;