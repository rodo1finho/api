import { api } from "./servicos/api"

export async function getPersonagem(nome) {
    try {
        const resultado = await api.get(`/quotes?character=${nome}`)
        return resultado.data
    } catch (error) {
        return ''
    }
}
