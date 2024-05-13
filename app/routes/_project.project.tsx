import Header from "~/components/header";
import img from '/astronut.jpg'
import { useState } from "react";

export default function Projects(){
    const arr = [1,2,3,4,5,6,7]
    const [submit,setSubmit] = useState(false)
    const handleEdit = (e)=>{
       e.preventDefault()
       setSubmit(true)
    }
    const handleSubmit = (e)=>{
         e.preventDefault()
         setSubmit(false)
    }
    return(
        <>
         <div className="flex-1 flex  flex-col h-screen">
            <div><Header/></div>
            <div className="h-full bg-third">

             {/* new save & delete buttons and attachemt part */}
        <div className="mt-1 py-1 bg-white mx-2 px-2 rounded-sm flex items-center justify-between"> 
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4  text-primary">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>
</div>
    <div>
        <button className="serCaseBtn px-5 border border-primary rounded-sm text-xs text-primary" >New</button>
        <button className="mx-4 serCaseBtn px-5 border border-primary rounded-sm text-xs text-primary">Save</button>
        <button className="serCaseBtn px-5 border border-primary rounded-sm text-xs text-primary">Delete</button>
    </div>
        </div>
        {/*END new save & delete buttons and attachemt part END*/}

        {/*------------------------- project details start----------------------- */}
        <div className="projctDetailMain mt-3 mx-2">
                <div className={`leftMain flex items-center ${submit ? 'space-x-2' : 'space-x-10'} justify-center`}>
                      {/*progress */}
                     <div>
                      <div className="flex items-center"><p className="text-xs text-primary">ADN001 </p>  <div className="h-2 w-2 rounded bg-red-500 mx-1"></div> <p className="text-xs text-primary">LMS</p></div>
                   {submit ?  <select className="inputProp my-1 border text-primary border-gray-600 w-40 py-1 text-xs  fade-in-animation">
                       <option value="option1 "><span className="text-red-500">In progress</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select>: <button className="text-xs bg-orange-500 text-white p-1 mt-1 fade-in-animation">InProgress</button>}  
                     </div>
                      {/* progress END */}
                       {/*start date */}
                     <div> 
                   <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
<p className="text-xs text-primary ml-1">Start Date</p> 
</div>  
                     {submit ? <input className="inputProp my-1 text-primary text-xs py-1 px-1 border border-gray-600 w-40 fade-in-animation" type='date'/> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">24/7/2000</p>} 
                     </div>
                      {/* start date END */}
                       {/*Due date */}
                     <div>
                     <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
<p className="text-xs text-primary ml-1">Due Date</p> 
</div>                                           {submit ? <input className="inputProp my-1 text-primary text-xs py-1 px-1 border border-gray-600 w-40 fade-in-animation" type='date'/> : <p className="text-xs text-primary font-bold my-2 fade-in-animation">24/7/2000</p>} 

                     </div>
                      {/* due date END */}
                       {/*Extented Due date */}
                     <div>
                     <div className="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
<p className="text-xs text-primary ml-1">Extented Due Date</p> 
                    </div> {submit ? <input className="inputProp my-1 text-primary text-xs py-1 px-1 border border-gray-600 w-40 fade-in-animation" type='date'/>:<p className="text-xs text-primary my-2 font-bold fade-in-animation">24/7/2000</p>} 

                     </div>
                      {/*Extented due date END */}
                        {/*Project Owner */}
                     <div>
                      <p className="text-xs text-primary">Project Owner</p>
                    {submit ?  <select className="inputProp my-1 border text-primary border-gray-600 w-40 py-1 text-xs fade-in-animation">
                       <option value="option1 "><span className="text-red-500">In progress</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">Earl Ragner</p>} 
                     </div>
                      {/* Project Owner END */}
                      {/*Project Manager */}
                     <div>
                      <p className="text-xs text-primary">Project Manager</p>
                    {submit ?  <select className="inputProp my-1 border text-primary border-gray-600 w-40 py-1 text-xs fade-in-animation">
                       <option value="option1 "><span className="text-red-500">In progress</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">James Bond</p>} 
                     </div>
                      {/* Project Manager END */}
                       {/*Project Account Controller */}
                     <div>
                      <p className="text-xs text-primary">Project Account Controller</p>
                     {submit ?  <select className="inputProp my-1 border text-primary border-gray-600 w-40 py-1 text-xs fade-in-animation">
                       <option value="option1 "><span className="text-red-500">In progress</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">Walter White</p>}
                     </div>
                      {/* Project Account Controller END */}
                    <div className="flex items-center justify-center"> {submit ? <input type="submit" onClick={(e)=>{handleSubmit(e)}} className="mt-4  border text-xs text-white py-1 bg-primary px-2 hover:cursor-pointer"/>: <button className="bg-primary text-white py-1 px-4 text-xs" onClick={(e)=>{handleEdit(e)}}>Edit</button>} </div>
                </div>
                
        </div>
         {/*------------------------- project details END------------------------- */}

          {/*-----------------------employees and progress------------------------ */}
           <div className="py-2 px-4 bg-white mx-2 my-2 flex justify-between items-center">
            {/* employees */}
            <div className="space-x-5 flex">
                {
                  arr.map(e=>(
                    <div key={e}>
                    <img src={img} className="h-8 mx-auto w-8 rounded-full"/>
                    <p className="text-center text-xs mt-1 text-primary">Name</p>
                </div>    
                  ))  
                }
           
            </div>
            {/* employees END*/}
            {/* Progress bar */}
            <div className="w-40 h-2 border rounded">
                <div className="progress w-1/2 h-2 bg-primary rounded"></div>
            </div>
            {/* Progress bar END*/}
           </div>
           {/*------------------------ employees and progress END------------------------*/}

          {/*------------------ project Accounts------------------- */}
          <div className="p-2 mx-2 bg-white  flex space-x-5">
         { /* customer name*/}  <div className="border-r   border-gray-500  px-3">
                <p className="text-xs text-primary">Customer Name</p>
               {submit ? <select className="inputProp border fade-in-animation my-1 text-primary border-gray-600 w-40  text-xs">
                       <option value="option1 "><span className="text-red-500">Jonny depp</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className=" fade-in-animation text-xs text-primary my-2 font-bold">Floki</p>} 
            </div>  { /* customer name END*/} 
            { /* Project Group*/}  <div className="border-r border-gray-500  px-3">
                <p className="text-xs text-primary">Project Group</p>
               {submit ? <select className="fade-in-animationinputProp border my-1 text-primary border-gray-600 w-40  text-xs">
                       <option value="option1 ">Jonny depp</option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className="fade-in-animation text-xs text-primary my-2 font-bold">Software Development</p>} 
            </div>  { /* Project Group END*/} 
            { /* Project Type*/}  <div className="border-r border-gray-500  px-3">
                <p className="text-xs text-primary">Project Group</p>
              {submit ? <select className="fade-in-animation inputProp border my-1 text-primary border-gray-600 w-40 text-xs">
                       <option value="option1 "><span className="text-red-500">Jonny depp</span></option>
                       <option value="option2">Option 2</option>
                       <option value="option3">Option 3</option>
                     </select> : <p className="fade-in-animation text-xs text-primary my-2 font-bold">Fixed</p>}  
            </div>  { /* Project Group END*/} 
            { /* Total revenue*/}  <div className="border-r border-gray-500  px-3">
                <p className="text-xs text-primary">Total revenue</p>
              {submit ? <input className="fade-in-animation inputProp my-1 text-primary text-xs px-1 border border-gray-600 w-40 " type='number' value='200000'/> :<p className="fade-in-animation text-xs text-primary my-2 font-bold">₹ 2000000</p> }  

            </div>  { /* Total revenue END*/} 
            { /* Total Cost*/}  <div className="border-r border-gray-500  px-3">
                <p className="text-xs text-primary">Total revenue</p>
              {submit ? <input className="inputProp my-1 text-primary text-xs px-1 border border-gray-600 w-40 fade-in-animation" type='number' value='200000'/> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">₹ 2000000</p>  } 

            </div>  { /* Total Cost END*/} 
            { /* Profit Margin*/}  <div className="border-r border-gray-500  px-3">
                <p className="text-xs text-primary">Total revenue</p>
                {submit ? <input className="inputProp my-1 text-primary text-xs px-1 border border-gray-600 w-40 fade-in-animation" type='number' value='200000'/> : <p className="text-xs text-primary my-2 font-bold fade-in-animation">₹ 2000000</p>  }
            </div>  { /* Profit Margin END*/} 
          </div>
          {/* -----------------------------project Accounts END---------------------------*/}

          {/*------------- task finance budget details comments------------ */}
          <div className="mx-2 mt-1 px-2 bg-white py-2 flex space-x-3">
          <div className="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 text-primary">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>
           <p className="text-primary text-xs mx-1">Task</p></div>
           <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
           </svg>
            <p className=" text-xs mx-1">Finance</p>
           </div>
           <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
            <p className=" text-xs mx-1">Budget</p>
           </div>
           <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
            <p className=" text-xs mx-1">Details</p>
           </div>
           <div className="flex items-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
            <p className=" text-xs mx-1">Comments</p>
           </div>
          </div>
           {/*-------------END  task finance budget details comments END------------ */}
           <p className="text-center text-green-500 mt-10">Click the edit button in the top</p>
           <p className="text-center text-red-500 mt-10">This space under development </p>
            </div>
         </div>

        </>
    )
}