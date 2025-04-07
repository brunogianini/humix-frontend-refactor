"use client";
import { Album } from "@/types/Album";
import { Card } from "./ui/card";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlbumRating } from "./album-rating";

export default function AlbumCard({ album }: { album: Album }) {

  let hasRating = false
  let nota = 0 
  
  if(album.ratings.length > 0){
    hasRating = true
    nota = album.ratings[0].nota as unknown as number
  }
  

  return (
    <Dialog>
      <DialogTrigger>
        <Card className="h-63 w-63 p-0 relative cursor-pointer" >
          <img className="h-63.5 w-63.5 rounded-lg" src={album.capa} />
          {hasRating ? (
            <div className="absolute flex">
              <div className=" m-2 flex items-center justify-center">
                <div className="w-10 h-10 bg-gradient-to-r from-black to-white rounded-lg opacity-70"></div>
                <p className="font-bold opacity-100 text-white absolute">{nota as unknown as number}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-black to-transparent rounded-lg">
            <p className="text-lg font-bold">{album.nome}</p>
            <p className="text-sm font-medium">{album.banda.nome}</p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="min-w-4xl">
        <DialogHeader>
          <DialogTitle>Classifique o álbum</DialogTitle>
        </DialogHeader>

          <div className="flex min-h-160">
            <div className="bg-amber-800 h-full flex-1/6 flex flex-col items-center p-4">
                <img className="h-63.5 w-63.5 rounded-lg" src={album.capa} />
                <p className="text-lg font-bold">{album.nome}</p>
                <p className="text-sm font-medium">{album.banda.nome}</p>



                <AlbumRating albumId={album.id} initialRating={nota as unknown as number} />
            </div>

            <div className="bg-blue-900 h-full flex-1/2">

            </div>
          </div>
        
      </DialogContent>
    </Dialog>
  );
}
