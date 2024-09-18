import axios from './axios'

interface DataHealth{
    pet_name: string
    date_h: string
    descriptions: string
    idOwner: number
}

export const addHealthReq = (health: DataHealth) => axios.post('/health', health)

export const getAllHealthReq = (id: number) => axios.get(`/health/${id}`)

export const deleteHealthReq = (id: number) => axios.delete(`/health/${id}`)