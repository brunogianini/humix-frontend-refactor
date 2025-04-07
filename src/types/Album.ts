import { Banda, Rating } from "@prisma/client"

export type Album = {
    id: number
    nome: string
    banda: Banda
    capa: string
    nota: number
    ratings: Rating[]
}