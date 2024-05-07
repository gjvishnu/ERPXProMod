export default function Mainview(){
    return(
        <>
 <div className="flex-1 flex flex-col h-screen bg-blue-500">
              <div className="py-10"></div>
              <div className="h-full border bg-red-500">
                <div className="flex h-full">
                    <div className="w-1/3 border ">
                        <div className="border h-1/2"></div>
                      <div className="border h-1/2"></div>
                     </div>
                    <div className="w-1/3 border">
                      <div className="flex h-full flex-col">
                        <div className="py-10"></div>
                        <div className="h-full bg-gray-500"></div>
                      </div>
                    </div>
                    <div className="w-1/3 border">
                        <div className="border h-1/3 flex">
                             <div className="w-1/3 h-full bg-purple-500"></div>
                             <div className="w-1/3 h-full bg-purple-200"></div>
                             <div className="w-1/3 h-full bg-purple-500"></div>
                         </div>
                        <div className="border h-1/3"></div>
                        <div className="border h-1/3"></div>
                    </div>
                </div>
              </div>
        </div>
        </>
    )
}