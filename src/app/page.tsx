import { AppSidebar } from "@/components/app-sidebar"
import ProfileTabs from "@/components/profile-tabs"
import { SidebarProvider } from "@/components/ui/sidebar"
import UserStats from "@/components/user-stats"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"


export default async function Home() {
  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="dark min-h-screen pb-12 w-full p-5">
        <UserStats />
        <ProfileTabs />
      </main>
    </SidebarProvider>
    
  );
}
