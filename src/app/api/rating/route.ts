import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import prisma from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id

    if (!userId) {
        return NextResponse.json({ message: 'Não autorizado' }, { status: 401 })
      }

  try {
    const body = await req.json()
    const { nota, albumId } = body

    if (!nota || isNaN(albumId)) {
      return NextResponse.json({ message: 'Dados inválidos' }, { status: 400 })
    }

    const existingRating = await prisma.rating.findUnique({
      where: {
        userId_albumId: {
          userId,
          albumId
        }
      }
    })

    let notaRes

    if (existingRating) {
      notaRes = await prisma.rating.update({
        where: {
          userId_albumId: { userId, albumId }
        },
        data: {
          nota,
          dateRated: new Date()
        }
      })
    } else {
      notaRes = await prisma.rating.create({
        data: {
          nota,
          userId,
          albumId
        }
      })
    }

    return NextResponse.json({ message: notaRes }, { status: 200 })
  } catch (error) {
    console.error('[PATCH_ALBUM_ERROR]', error)
    return NextResponse.json({ message: 'Erro interno do servidor' }, { status: 500 })
  }
}
