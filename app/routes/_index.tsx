import type { MetaFunction } from "@remix-run/node";
import Mainmenu from "~/components/mainMenu";
import Mainview from "~/components/mainview";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <div className="flex">
     <Mainmenu/>
     <Mainview/>
     </div>
    </>
  );
}
