import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function AlbumsFavoritosCard(){

    return(
        <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-white">Albums favoritos</CardTitle>
                            <CardDescription className="text-zinc-400">Seus álbums com a maior avaliação</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <img
                                src={"/placeholder.svg"}
                                alt="teste"
                                className="h-12 w-12 rounded-md object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">teste</h4>
                                <p className="truncate text-xs text-zinc-400">teste</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-white">10</span>
                            </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <img
                                src={"/placeholder.svg"}
                                alt="teste"
                                className="h-12 w-12 rounded-md object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">teste</h4>
                                <p className="truncate text-xs text-zinc-400">teste</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-white">10</span>
                            </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <img
                                src={"/placeholder.svg"}
                                alt="teste"
                                className="h-12 w-12 rounded-md object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">teste</h4>
                                <p className="truncate text-xs text-zinc-400">teste</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-white">10</span>
                            </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <img
                                src={"/placeholder.svg"}
                                alt="teste"
                                className="h-12 w-12 rounded-md object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">teste</h4>
                                <p className="truncate text-xs text-zinc-400">teste</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-white">10</span>
                            </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                            <img
                                src={"/placeholder.svg"}
                                alt="teste"
                                className="h-12 w-12 rounded-md object-cover"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="truncate text-sm font-medium text-white">teste</h4>
                                <p className="truncate text-xs text-zinc-400">teste</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-medium text-white">10</span>
                            </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
    )
}