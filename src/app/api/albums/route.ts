import { Album } from "@/types/Album";
import { NextRequest, NextResponse } from "next/server";


const albums: Album[] = [
    {
      nome: "Ants From Up There",
      banda: "Black Country, New Road",
      capa: "https://cdn-images.dzcdn.net/images/cover/63683966b1ecb7d3c82118cf27641a58/500x500.jpg",
      nota: 9,
    },
    {
      nome: "In Rainbows",
      banda: "Radiohead",
      capa: "https://upload.wikimedia.org/wikipedia/pt/9/96/Radiohead_-_In_Rainbows.jpg",
      nota: 9,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    },
    {
      nome: "First Cuckoo",
      banda: "Deodato",
      capa: "https://i.scdn.co/image/ab67616d0000b273dddae1d853b47729d2254c85",
      nota: 0,
    }
  ];
  


  export async function GET(req: NextRequest) {
    return NextResponse.json(albums);
  }