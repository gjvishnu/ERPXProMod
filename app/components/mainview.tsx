import Header from "./header";
import vidOne from '/vidOne.mp4'
import vidTwo from '/vidTwo.mp4'
import astronut from '/astronut.jpg'



export default function Mainview(){
    return(
        <>
 <div className="flex-1 flex flex-col h-screen ">
              <div className="">
                <Header/>
              </div>
              <div className="h-full">
                <div className="flex h-full">
                  {/* first div */}
                    <div className="w-1/6">
                        <div className="  h-1/2">
                        <div className=" flex justify-center mt-4">
     <img src={astronut} alt="Robert Downey Jr." className='w-20 h-20 rounded-full'/>
   </div>
   <div className='mt-4'><p className='text-center'>Astronut</p></div>
   <div className=''><p className='text-center text-xs text-gray-500'>astronut@gmail.com</p></div>
   {/* menus */}
   <div className='mt-5 space-y-2'>
    {/* link one */}
     <div className='lnkOne flex space-x-2 Linksactive items-center transition-all px-1 py-1 rounded-2xl'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="svg w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
</div>
        <div><p className=' text-xs'>New Feeds</p></div>
      </div> 
        {/* link one */}
        {/* link one */}
      <div className='lnkOne flex space-x-2 items-center transition-all duration-500 px-1 py-1 rounded-2xl'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

</div>
        <div><p className=' text-xs'>Message</p></div>
      </div>
        {/* link one */}
        {/* link one */}
      <div className='lnkOne flex space-x-2 items-center transition-all duration-500  px-1 py-1 rounded-2xl'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

</div>
        <div><p className=' text-xs'>Forums</p></div>
      </div>
        {/* link one */}
        {/* link one */}
      <div className='lnkOne flex space-x-2 px-1 py-1 items-center transition-all duration-500 rounded-2xl'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="svg w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
</svg>
</div>
        <div><p className=' text-xs'>New Feeds</p></div>
      </div>
        {/* link one */}
   </div>
   {/* menus END */}
                          </div>
                      </div>
                  {/* first div END*/}
                    {/* second div */}
                    <div className="w-1/2 ">
                      <div className="flex h-full flex-col">
                        <div className="py-2 flex justify-between">
                          <h6 className="font-semibold text-primary">Feeds</h6>
                          <div className="flex">
                            <h6 className="text-secondary text-sm">Recents</h6>
                            <h6 className="mx-2 text-primary text-sm">Friends</h6>
                            <h6 className="text-secondary text-sm">Popular</h6>
                          </div>
                        </div>
                        <div className=" h-full overflow-y-hidden overflow-y-scroll">
                         {/* single post */}
                     <div className='post m-1 p-1 bg-blue-100 rounded-2xl' >
    <div className='m-3 flex'>
    <img src={''} alt="Robert Downey Jr." className='w-10 h-10 rounded-full'/>
    <div className='ms-3'>
      <p className='text-xs'>Name</p>
      <p className='text-xs text-gray-500'>Date</p>
    </div>
    </div>
    <p className='m-3 text-xs'>There is a reason why you find BMW in the heart of the top athelates and celebrites - because it does what other can't do</p>

    {/* videos */}
    <div className='grid grid-cols-2 m-3 gap-x-2'>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidOne} type="video/mp4"/>
 </video>
      </div>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidTwo} type="video/mp4"/>
 </video>
      </div>
    </div>
        {/* videos End*/}
        <div className='flex m-3'>
          {/* views */}
          <div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
<p className='mx-2 text-xs '>9922</p>
</div>
{/* views END */}
{/* Likes */}
<div className='flex mx-2 items-center'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
</div>
<p className='mx-2 text-xs '>Like</p>
</div>
{/* likes END */}
{/* comments */}
<div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
</div>
<p className='mx-2 text-xs'>Comments</p>
</div>
{/* comments END*/}

        </div>

                          </div>
                         {/* single post  END*/}
                        {/* single post */}
                        <div className='post m-1 p-1 bg-blue-100 rounded-2xl' >
    <div className='m-3 flex'>
    <img src={''} alt="Robert Downey Jr." className='w-10 h-10 rounded-full'/>
    <div className='ms-3'>
      <p className='text-xs'>Name</p>
      <p className='text-xs text-gray-500'>Date</p>
    </div>
    </div>
    <p className='m-3 text-xs'>There is a reason why you find BMW in the heart of the top athelates and celebrites - because it does what other can't do</p>

    {/* videos */}
    <div className='grid grid-cols-2 m-3 gap-x-2'>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidOne} type="video/mp4"/>
 </video>
      </div>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidTwo} type="video/mp4"/>
 </video>
      </div>
    </div>
        {/* videos End*/}
        <div className='flex m-3'>
          {/* views */}
          <div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
<p className='mx-2 text-xs '>9922</p>
</div>
{/* views END */}
{/* Likes */}
<div className='flex mx-2 items-center'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
</div>
<p className='mx-2 text-xs '>Like</p>
</div>
{/* likes END */}
{/* comments */}
<div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
</div>
<p className='mx-2 text-xs'>Comments</p>
</div>
{/* comments END*/}

        </div>

                          </div>
                         {/* single post  END*/}
                             {/* single post */}
                     <div className='post m-1 p-1 bg-blue-100 rounded-2xl' >
    <div className='m-3 flex'>
    <img src={''} alt="Robert Downey Jr." className='w-10 h-10 rounded-full'/>
    <div className='ms-3'>
      <p className='text-xs'>Name</p>
      <p className='text-xs text-gray-500'>Date</p>
    </div>
    </div>
    <p className='m-3 text-xs'>There is a reason why you find BMW in the heart of the top athelates and celebrites - because it does what other can't do</p>

    {/* videos */}
    <div className='grid grid-cols-2 m-3 gap-x-2'>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidOne} type="video/mp4"/>
 </video>
      </div>
      <div className=''>
      <video autoPlay muted loop className='rounded-xl'>
  <source src={vidTwo} type="video/mp4"/>
 </video>
      </div>
    </div>
        {/* videos End*/}
        <div className='flex m-3'>
          {/* views */}
          <div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
<p className='mx-2 text-xs '>9922</p>
</div>
{/* views END */}
{/* Likes */}
<div className='flex mx-2 items-center'><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-600">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
</div>
<p className='mx-2 text-xs '>Like</p>
</div>
{/* likes END */}
{/* comments */}
<div className='flex items-center'><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
</div>
<p className='mx-2 text-xs'>Comments</p>
</div>
{/* comments END*/}

        </div>

                          </div>
                         {/* single post  END*/}
                           
                        </div>
                      </div>
                    </div>
                     {/* second div */}
                     {/* third div */}
                    <div className="w-1/3 border">
                      
                    </div>
                    {/* third div END*/}
                </div>
              </div>
        </div>
        </>
    )
}