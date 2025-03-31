"use client"

import { useEffect, useState } from "react";
import AlbumCard from "./album-card";
import { Album } from "@/types/Album";

export default function AlbumGrid(){
    const [albums, setAlbums] = useState<Album[]>([])

    async function fetchAlbums(){
        await fetch("/api/albums")
            .then((res) => res.json())
            .then((data) => {
                setAlbums(data)
            })
    }

    useEffect(() => {
            fetchAlbums()
        }, [])

    return(
        <main className="flex flex-wrap gap-2">
            {albums.map((album, key) => (
                <AlbumCard key={key} album={{
                    nome: album.nome,
                    banda: album.banda,
                    capa: album.capa,
                    nota: album.nota
                }} />
            ))}
        </main>
    )
}