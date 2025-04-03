"use client"

import { useEffect, useState } from "react";
import AlbumCard from "./album-card";
import { Album } from "@/types/Album";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AlbumGrid(){
    const [albums, setAlbums] = useState<Album[]>([])
    const { data: session, status } = useSession()

    if (status === "unauthenticated") {
        redirect("/login");
    }

    async function fetchAlbums(){
        await fetch(`/api/albums/`)
            .then((res) => res.json())
            .then((data) => {
                setAlbums(data)
            })
    }

    useEffect(() => {
        fetchAlbums()
        }, [session])

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