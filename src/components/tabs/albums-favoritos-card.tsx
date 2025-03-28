"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import AlbumItem from "./album-item";
import { Album } from "@/types/Album";

export default function AlbumsFavoritosCard(){
    const [albums, setAlbums] = useState<Album[]>([])

    async function fetchAlbums(){
        await fetch("/api/album-favorito")
            .then((res) => res.json())
            .then((data) => {
                setAlbums(data)
            })
    }

    useEffect(() => {
        fetchAlbums()
    }, [])

    return(
        <Card className="bg-zinc-900 border-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <div>
                            <CardTitle className="text-white">Albums favoritos</CardTitle>
                            <CardDescription className="text-zinc-400">Seus álbums com a maior avaliação</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        {albums.map((album, i) => (
                            <AlbumItem key={i} album={{
                                nome: album.nome,
                                banda: album.banda,
                                capa: album.capa,
                                nota: album.nota
                            }} />
                        ))}
                    </CardContent>
                </Card>
    )
}