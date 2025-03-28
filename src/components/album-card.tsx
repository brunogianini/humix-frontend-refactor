import { Album } from "@/types/Album";
import { Card } from "./ui/card";

export default function AlbumCard({album}: {album: Album}){

    return(
        <Card className="h-60 w-60 p-0 relative">
            <img className="h-60 w-60 rounded-lg" src={album.capa}/>
            <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-black to-transparent rounded-lg">
                <p className="text-lg font-bold">{album.nome}</p>
                <p className="text-sm font-medium">{album.banda}</p>
            </div>

        </Card>
    )
}