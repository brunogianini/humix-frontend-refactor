import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs } from "./ui/tabs";
import OverviewTab from "./tabs/overview-tab";


export default function ProfileTabs(){

    return(
        <div className="mt-8">
            <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-zinc-900 rounded-lg">
                    <TabsTrigger value="overview" className="rounded-md data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                        Overview
                    </TabsTrigger>
                    <TabsTrigger value="albums" className="rounded-md data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                        Albums
                    </TabsTrigger>
                    <TabsTrigger value="artistas" className="rounded-md data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                        Artistas
                    </TabsTrigger>
                    <TabsTrigger value="atividade" className="rounded-md data-[state=active]:bg-zinc-800 data-[state=active]:text-white">
                        Atividade
                    </TabsTrigger>
                </TabsList>

                <OverviewTab />
            </Tabs>
        </div>
    )
}