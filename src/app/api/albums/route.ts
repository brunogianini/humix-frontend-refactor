import prisma from "@/lib/prisma";
import { getAlbumTrack, getBandImage, searchAlbum } from "@/lib/spotifyClient";
import { NextRequest, NextResponse } from "next/server";


  export async function GET(req: NextRequest) {

    try{
        const albums = await prisma.album.findMany({
            where: {
                users: { 
                    some: {
                        id: "123", 
                    },
                },
                ratings: {
                    none: {
                        userId: "123",
                        nota: { gt: 0 }
                    }
                }
        
            },
            include: {
                banda: true, 
                songs: true,
                ratings: {
                    where: {
                        userId: "123", 
                    }
                    
                }
            }    
        })
    
        return NextResponse.json(albums)
    } catch {
        return NextResponse.json({message: "erro ao pegar albums"})
    }
    
  }

  export async function POST(req: NextRequest){
    const { nome, banda } = await req.json()

    const album = await searchAlbum(nome, banda)

    const album_nome = album.name
    const album_link = album.uri
    const album_art = album.images[0].url

    const banda_nome = album.artists[0].name
    const banda_image = await getBandImage(album.artists[0].id)

    const trackData = await getAlbumTrack(album.uri)
    const songs = trackData.items

    const songCreationData = songs.map((song: { name: string }) => ({
        name: song.name,
        link: "a",
    }))

    try {

      const existingAlbum = await prisma.album.findUnique({
          where: { link: album_link },
      })


      const band = await prisma.banda.upsert({
          where: { nome: banda_nome },
          update: { foto: banda_image.images[0].url },
          create: {
              nome: banda_nome,
              foto: banda_image.images[0].url,
          }
      })

      let album;
      if (existingAlbum) {
          album = await prisma.album.update({
              where: { link: album_link },
              data: {
                  users: {
                      connect: { id: "123" },
                  },
              },
          })
      } else {

          const album = await prisma.album.create({
              data: {
                  nome: album_nome,
                  link: album_link,
                  capa: album_art,
                  nota: 0.0,
                  banda: {
                      connect: { id: band.id },
                  },
                  songs: {
                      create: songCreationData,
                  },
                  users: {
                      connect: { id: "123" }
                  }
              },
              include: {
                  banda: true,
                  songs: true,
                  users: true,
              }
          })
          return NextResponse.json(album)
      }

      

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: 'Error creating album and band' });
    }

  }