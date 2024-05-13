import { Link } from "@remix-run/react";

export default function Offcanvas({handCut}){

const handCuts = (data)=>{
    handCut(data)
}

    return(
        <>
        <div className="offcanMain transition-all duration-700 bg-white hover:cursor-pointer  h-full  shadow-xl">
            <p className="text-end px-5 text-2xl text-primary" onClick={()=>{handCuts(false)}}>x</p>
            <div className="offcanWarp transition-all duration-700 pt-5 h-full flex flex-col items-center bg-white space-y-7">
               {/* dashboard link */}
               <div className="flex  items-center">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-primary">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                  </svg>

                        </div>
                         <h6 className="text-primary text-sm mx-3">Dashboard</h6>
                    </div>
                  {/*end  dashboard link */}
                   {/* workspace link */}
                   <div className="flex items-center ">
                         <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-primary">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                     </svg>
                     </div>
                     <h6 className="text-primary text-sm mx-3">Workspace</h6>
                     </div>
                    {/*end workspace link */}
                    {/* process */}
                    <div className="OFFprocessMain   h-8 hover:h-40 transition-all duration-700 py-2">
                    <div className="flex items-center ">
                      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                      </div>
                      <h6 className="text-green-500 text-sm mx-3 ">Process</h6>
                      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 text-green-500">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                       </svg>
                       </div>
                    </div>
                    <div className="mt-3 space-y-3">
                        <Link to={'/projects'} className="text-xs text-green-500">Project</Link> 
                        <h1 className="  text-xs">Task</h1>
                        <h1 className="  text-xs">Time Transaction </h1>
                    </div>
                    </div>
                    {/* end process */}
                    </div>
        </div>
        </>
    )
}