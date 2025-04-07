import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    

    try {
        const albums = await prisma.album.findMany({
            where: {
                users: { 
                    some: {
                        id: userId, 
                    },
                },
                ratings: {
                    some: {
                        userId: userId,
                        nota: {gt: 0}
                    }
                }
            },
            include: {
                banda: true, 
                songs: true,
                ratings: {
                    where: {
                        userId: userId, 
                    }
                    
                }
            }    
        })

        return NextResponse.json(albums);
    } catch (error) {
        console.error("Erro ao buscar álbuns:", error);
        return NextResponse.json({ message: "Erro ao buscar álbuns" }, { status: 500 });
    }
}