import AddAlbum from "@/components/add-album";
import AlbumGrid from "@/components/album-grid";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function NaoOuvidos() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="dark min-h-screen max-w-full p-5">
            <div className="w-full flex mb-5"><AddAlbum /></div>
            
            <AlbumGrid tipo={0}/>
      </main>
    </SidebarProvider>
  );
}
