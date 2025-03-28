import { TabsContent } from "@radix-ui/react-tabs";
import AlbumsFavoritosCard from "./albums-favoritos-card";
import BandasFavoritasCard from "./bandas-favoritas-card";
import StreakCalendar from "./streak-calendar";


export default function OverviewTab(){

    return(
        <TabsContent value="overview" className="mt-6 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid gap-6 md:grid-cols-2">
                
                <AlbumsFavoritosCard />
                <BandasFavoritasCard />
                
            </div>

            <StreakCalendar />
        </TabsContent>
    )
}