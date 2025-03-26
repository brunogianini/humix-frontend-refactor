import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default async function Home() {
  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="dark min-h-screen pb-12 w-full">

      </main>
    </SidebarProvider>
    
  );
}
