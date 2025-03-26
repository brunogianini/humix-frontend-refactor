import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession()

  if(!session){
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>Ola mundo</main>
    </SidebarProvider>
    
  );
}
