import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function NaoOuvidos() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="dark min-h-screen">
            a
      </main>
    </SidebarProvider>
  );
}
