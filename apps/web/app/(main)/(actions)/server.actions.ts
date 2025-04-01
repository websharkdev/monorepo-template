import { ITodo } from "@repo/types"
import axios from "axios"

export const getTasks = async () => {
    try {
        const { data } = await axios( {
            url: 'http://localhost:3002/tasks',
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        return data as ITodo[]
    } catch (error) {
        console.log('OOPS! ERROR:', error)
        return [] as ITodo[]

    }
}