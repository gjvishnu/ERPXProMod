import { Link } from "@remix-run/react";
import { useEffect } from "react";
import Header from "~/components/header";
import Offcanvas from "~/components/offcanvas";

export default function Project(){

useEffect(()=>{

},[])

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

          {/* Table Starts */}

          <div className=' mr-2 flex flex-row bg-gray-100 h-[75%] mt-5'>
            <div>
            <table className="mt-2 overflow-x-scroll" id="element-class">
        <thead className="bg-tableBG">
        <tr>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200 flex flex-row"><input type="checkbox" className='mr-2'/> Project ID </th>
            <th  className="text-center text-xs px-4 py-2 border border-gray-200 "> Project Name  </th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"> Customer Name  </th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Project Group </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Project Type </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Project Status </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Start Date </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Due Date </span></th>
            <th scope="col" className="text-center text-xs py-2 border border-gray-200"><span className='flex flex-row '>Project Progress </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Total Revenue </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Total Cost </span></th>
            <th scope="col" className="text-center text-xs px-4 py-2 border border-gray-200"><span className='flex flex-row '>Project Margin </span></th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
         <tr>
           <Link to={'/project'}><td className="text-center text-xs text-green-500 py-4 "><div className="flex ps-5"><input type="checkbox" className='mr-2'/> <p>ADN001</p></div></td></Link> 
            <td className="text-center text-xs border border-gray-200">Project A</td>
            <td className="text-center text-xs border border-gray-200">Gayu</td>
            <td className="text-center text-xs border border-gray-200">Developer</td>
            <td className="text-center text-xs border border-gray-200">Fixed</td>
            <td className="text-center text-xs border border-gray-200">In Progress</td>
            <td className="text-center text-xs border border-gray-200">10-01-2024</td>
            <td className="text-center text-xs border border-gray-200">10-08-2025</td>
            <td className="text-center text-xs border border-gray-200">30%</td>
            <td className="text-center text-xs border border-gray-200">₹ 1,80,00,000</td>
            <td className="text-center text-xs border border-gray-200">₹ 1,00,00,000</td>
            <td className="text-center text-xs border border-gray-200">₹ 80,00,000</td>
        </tr> 
        <tr>
        <Link to={'/project'}><td className="text-center text-green-500 text-xs py-4 "><div className="flex ps-5"><input type="checkbox" className='mr-2'/> <p>ADN002</p></div></td></Link> 
            <td className="text-center text-xs border border-gray-200">Project B</td>
            <td className="text-center text-xs border border-gray-200">Murugeswari</td>
            <td className="text-center text-xs border border-gray-200">Devops</td>
            <td className="text-center text-xs border border-gray-200">Fixed</td>
            <td className="text-center text-xs border border-gray-200">In Progress</td>
            <td className="text-center text-xs border border-gray-200">10-01-2024</td>
            <td className="text-center text-xs border border-gray-200">10-08-2025</td>
            <td className="text-center text-xs border border-gray-200">50%</td>
            <td className="text-center text-xs border border-gray-200">₹ 10000000</td>
            <td className="text-center text-xs border border-gray-200">₹ 1000000</td>
            <td className="text-center text-xs border border-gray-200">₹ 800000</td>
        </tr>
    </tbody>
</table>
 
           
            </div>
        </div>

          {/* Table Ends */}

            </div>
          </div>

        </>
    )
}