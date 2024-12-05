import React, { Fragment, useRef, useState } from 'react'
// import './src/index.css'

const Todo = () => {

   let [item,setItem]=useState("")
   let[listItems,setListItems]=useState([])
    let[editIndex,setEditIndex]=useState(null)
   let inputRef = useRef()

  let handleChange=(e)=>{
    e.preventDefault()
    setItem(inputRef.current.value)
    if(inputRef.current.value !="")
      { 
        if(editIndex!=null){
         listItems[editIndex]= inputRef.current.value;
         setEditIndex(null)
         inputRef.current.value=""
        }else{
          setListItems([...listItems,inputRef.current.value])              
          inputRef.current.value=""
        }
        
    }
  }

  let handleDelete=(id)=>{
      let newArray=listItems.filter((ele,ind)=>{
        return  ind!=id
      })
    setListItems(newArray)
  }

  let handleEdit=(id)=>{
    console.log(id)
    // console.log(listItems[id])
    setEditIndex(id)
    inputRef.current.value=listItems[id]
  }

  let handleDeleteAll=()=>{
    setListItems([])
  }
  return (
   <div className="mainContainer bg-black text-black h-screen flex items-center justify-center overflow-auto " >
    <main className='flex items-center justify-center flex-col bg-white border-white border-2 border-solid h-[500px] w-[400px] gap-5  rounded-lg overflow-visible flex-col'>

        <h1 className='text-2xl font-black basis-2'>TO-DO-APP</h1> 
        <form onSubmit={handleChange} className='basis-2'>
          <input type="text" name="item" id="" placeholder='enter any item' ref={inputRef} className="border-2 border-solid border-fuchsia-600 text-black text-black p-2 rounded-lg outline-none"/>
          <input type="submit" value={editIndex!=null?"update items 😍":"Add item ❤️"}  className='font-medium border-solid border-2 border-none p-2 ml-2 rounded-lg bg-cyan-500 '/>
        </form>
       
        <ul className='basis-60 h-[300px] w-[400px] overflow-auto'>
            {
              listItems.map((ele,ind)=>{
                return <Fragment key={ind}>
                    <div className='w-[320px]'>
                   <li className='w-[320px] border-2 gap-3 flex justify-between mt-2 hover:scale-110 ease-out duration-300 p-3 ml-8 bg-slate-400 rounded-md'> {ele}<div><button onClick={()=>handleEdit(ind)} className='bg-lime-500 text-black mr-2 pl-2 pr-2 rounded-md'>Edit</button><button onClick={()=>handleDelete(ind)} className='bg-amber-600 text-black mr-2 pl-2 pr-2 rounded-md'>Delete</button></div></li>
                   </div>
                </Fragment>
            })

            }
            
        </ul>
        <input type="submit" value="deleteAll" onClick={handleDeleteAll} className='bg-red-600 text-white  p-3 pl-8 pr-8 rounded'/>
        </main>
   </div>
  )
}

export default Todo