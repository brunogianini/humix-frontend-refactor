import { Album } from "@/types/Album";
import { NextRequest, NextResponse } from "next/server";


const albums: Album[] = [
    {
      nome: "Ants From Up There",
      banda: "Black Country, New Road",
      capa: "https://cdn-images.dzcdn.net/images/cover/63683966b1ecb7d3c82118cf27641a58/500x500.jpg",
      nota: 10,
    },
    {
      nome: "In Rainbows",
      banda: "Radiohead",
      capa: "https://upload.wikimedia.org/wikipedia/pt/9/96/Radiohead_-_In_Rainbows.jpg",
      nota: 10,
    }
  ];
  


  export async function GET(req: NextRequest) {
    return NextResponse.json(albums);
  }