import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useEffect } from "react";
import Mainmenu from "~/components/mainMenu";
import Mainview from "~/components/mainview";

export const meta: MetaFunction = () => {
  return [
    { title: "HRM-projects" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  
const handOff = ()=>{
  return false
}

useEffect(()=>{

},[])

  return (
    <>
    <div className="flex">
     <Mainmenu proOFF={handOff}/>
     <Outlet/>
     </div>
    </>
  );
}
