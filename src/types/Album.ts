import { Banda } from "@prisma/client"

export type Album = {
    nome: string
    banda: Banda
    capa: string
    nota: number
}