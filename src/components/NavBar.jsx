import { useRef, useState } from "react"
import { BsSearch } from "react-icons/bs"
import "../App.css"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"


const NavBar = () => {
  const navBtn = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSrch, setIsOpenSrch] = useState(false)
  const [srchText, setSrchText] = useState("")
  const data = useSelector(state => state.allTask.myTasks)


const searchTasks = (mydata)=> {
return mydata?.filter((item) => item.title.toLowerCase().includes(srchText) ||
item.description.toLowerCase().includes(srchText) ||
item.priority.toLowerCase().includes(srchText) 
)
}


console.log(searchTasks(data))

console.log(srchText)
  const navOptions = [
    { text: "Home", linkTo: "/" },
    { text: "About us", linkTo: "/aboutus" },
    { text: "Our Services", linkTo: "/services" },
    { text: "Blog", linkTo: "/myblog" }
  ]

  const handleSearch = () => {
    setIsOpen(false)
    setIsOpenSrch(!isOpenSrch)
    navBtn.current.classList.remove("active")
  }

  const menuburger = () => {
    navBtn.current.classList.toggle("active")
    setIsOpen(!isOpen)
    setIsOpenSrch(false)
  }

  const closePop = () => {
    setIsOpenSrch(false)
    setIsOpen(false)
    navBtn.current.classList.remove("active")
  }

  return (
    <>
      <nav className='relative bg-[#a154e9]ss bg-violet-600/95 flex justify-between max-w-[1200px] mx-auto px-3 py-1 text-white z-[2999] '>
        <div className='flex items-center gap-8 lg:gap-12 xl:gap-15'>
          <div className='lg:text-4xl sm:text-3xl text-base font-bold  text-[#e9ee86]ss text-yellow-200  '>
            My Notes 
          </div>


          <ul className={`flex flex-col justify-center md:items-center md:flex-row gap-1 sm:gap-3 bg-violet-600/90 md:bg-transparent py-4 px-1 absolute top-full left-0 right-0 md:static md:p-0 transition-all border-t-2 border-slate-200/40 md:border-t-0 scale-1 duration-500 z-[2900]  scale-0 ${isOpen ? "scale-100" : ""} md:scale-100 w-full md:w-auto `} style={{ transformOrigin: "top left" }}>
            {
              navOptions.map(nOP => <li className='  ' key={nOP.linkTo}> <Link to={nOP.linkTo} onClick={()=>{ setIsOpen(false),    navBtn.current.classList.remove("active")}} className="hover:bg-slate-400/7 md:rounded-md hover:bg-slate-300/20 block  font-semibold   px-4 py-1 md:px-2 text-sm  lg:text-xl lg:font-normal" >{nOP.text}</Link></li>)
            }

          </ul>
        </div>



        <div className=' flex gap-3 items-center md:flex-1 justify-center'>

          <div onClick={handleSearch} className='hover:bg-slate-300/25 active:bg-slate-300/40 p-2 cursor-pointer  transition rounded-md md:hidden'> <BsSearch size={15} /> </div>

          <div  className={`absolute top-[82px] left-0 w-full   z-[400] transition-all scale-0 duration-300 ease-in-out ${isOpenSrch ? "scale-100" : ""}`}>
            <div className='bg-violet-700/70  rounded-md flex items-center justify-center px-2  w-[80%]  max-w-sm mx-auto '>
              <input type="text" name="" placeholder='search you tasks...' className='bg-transparent px-2 py-1 text-slate-200 outline-none w-full placeholder:text-slate-300' id="" value={srchText} onChange={(e) => setSrchText(e.target.value)} /> <BsSearch size={20} className='cursor-pointer' />
            </div>
          </div>

          <div onClick={handleSearch} className='bg-violet-700/70  rounded-md md:flex items-center justify-center px-2 hidden w-[80%] '>
            {/* <input type="text" placeholder='search you tasks...' className='bg-transparent px-2 py-1 text-slate-200/80 outline-none w-full placeholder:text-slate-300' id="" /> */}
            <span className="text-slate-300 w-full px-2 text-xs md:text-sm py-1"> search you tasks...</span>
             <BsSearch size={20} className='cursor-pointer' />
          </div>


          <div onClick={menuburger} className="banner md:hidden ">
            <div ref={navBtn} className="menu-bar"></div>
          </div>
        </div>


      </nav>
      {(isOpen || isOpenSrch) &&
        <div onClick={closePop} className={`${isOpenSrch ? "bg-black/95" : "bg-black/80"}  fixed left-0 right-0 top-0 bottom-0  z-[100] `}></div>
      }
 {isOpenSrch &&(
  //  <div className={`z-[150] bg-red-600 absolute left-0  bottom-0 w-screen h-[75vh] ${isOpenSrch ? "scale-100" : " scale-50"} transition-all duration-300` }>  
<div className=" mx-auto overflow-y-auto  w-[80%]  max-w-[1400px] mt-[25%] sm:mt-[20%] md:mt-[10%]">
  {data &&
        <div className='px-2 sm:px-4  flex items-center justify-center sm:gap-5 md:gap-7 z-[500] flex-wrap gap-3  '>

          {searchTasks(data)?.map(task => <div className="z-[500] block"><TaskCard noBg="sachin" task={task} key={task.id} /> </div>)}
        </div>
      }
{/* </div> */}
</div>)
  }
{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam neque vel ipsam, nemo corporis eius, facilis, quod facere quis quasi laborum? In ipsum eius repellendus id voluptatum modi voluptate ducimus natus consequatur maiores, pariatur, quaerat doloremque laboriosam aut officia totam accusamus rerum veniam! Quisquam minus maiores aperiam quasi eum, cupiditate molestiae quis harum illo? Possimus consequatur mollitia, quam libero nesciunt reprehenderit corrupti ea nulla ullam dolorem. */}
    </>
  )
}

export default NavBar
