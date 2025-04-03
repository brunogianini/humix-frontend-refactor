import { Album } from "@/types/Album";
import { Card } from "./ui/card";

export default function AlbumCard({album}: {album: Album}){
    var hasRating = false

    if(album.nota > 0){
        hasRating = true
    }

    return(
        <Card className="h-63.5 w-63.5 p-0 relative cursor-pointer">
            <img className="h-63.5 w-63.5 rounded-lg" src={album.capa}/>
            {
                hasRating ?

                    <div className="absolute flex">
                        <div className=" m-2 flex items-center justify-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-black to-white rounded-lg opacity-70"></div>
                            <p className="font-bold opacity-100 text-white absolute">{album.nota}</p>

                        </div>
                    </div>

                : <></>
            }
            <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-black to-transparent rounded-lg">
                <p className="text-lg font-bold">{album.nome}</p>
                <p className="text-sm font-medium">{album.banda.nome}</p>
            </div>

        </Card>
    )
}