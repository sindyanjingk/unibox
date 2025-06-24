import HomePage from "@/components/hompage/page";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home(){
  const session = await getSession()
  console.log({session});
  if(session){
    redirect("/dashboard")
  }
  return (
    <div>
      <HomePage/>
    </div>
  )
}