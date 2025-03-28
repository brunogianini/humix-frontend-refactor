import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import AlbumItem from "./album-item";

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
                        <AlbumItem album={{
                            nome: "Ants From Up There",
                            banda: "Black Country, New Road",
                            capa: "https://cdn-images.dzcdn.net/images/cover/63683966b1ecb7d3c82118cf27641a58/500x500.jpg",
                            nota: 10
                        }} />
                    </CardContent>
                </Card>
    )
}