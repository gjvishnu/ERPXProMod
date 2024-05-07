import astronut from '/astronut.jpg'

export default function Header(){
    return(
        <>
        <div className="grid grid-cols-3 py-1">
           <div className=" flex items-center">
            <h2 className='text-primary font-bold'>Employee Management</h2>
           </div>
           {/* header second col  */}
           <div className="flex justify-center items-center">
            <div className="flex border border-gray-600 px-2 py-1">
           <div> <input className="headerInpt"/></div> 
            <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
        </div>
        </div>
        </div>
         {/* header second col  END*/}
        {/* header third col*/}
           <div>
            <div className="flex items-center justify-end space-x-4 pe-2">
            <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
</div>
<div><select className="headerInpt border border-gray-600 p-1">
  <option value="option1"></option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
</div>
<img src={astronut} alt="Robert Downey Jr." className="w-10 h-10 rounded-full" />

</div>
           </div>
           {/* header third col END*/}
        </div>
        </>
    )
}