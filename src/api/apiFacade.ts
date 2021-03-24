import { IOrder } from "../types/orderDTO"
export const URL = `http://localhost:8080/jpareststarter`


const makeOrder = async (order?: IOrder) => {

    if (order === undefined) {
        return
    }

    const response = await fetch(URL, makeOptions('POST', order))
    return response

}

const makeOptions = (method: string, body: any) => {

    const options = {
        method: method,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }
    return options

}




export const apiFacade = {
    makeOrder
}

