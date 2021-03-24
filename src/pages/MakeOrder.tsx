import { ChangeEvent, useEffect, useState } from "react"
import { apiFacade } from "../api/apiFacade"
import { IOrder, IProduct } from "../types/orderDTO"
// type InputEvent = Omit<ChangeEvent<HTMLInputElement>, `target`>
// type Target = { target: { value: string, name: keyof IOrder } }
// type InputUnion = InputEvent & Target
// const abc: InputUnion = {target: {name}}

export const MakeOrder = () => {

    const [order, setOrder] = useState<IOrder>({ userName: "", products: [] })
    const [product, setProduct] = useState<IProduct>()

    const onSubmit = () => {

        apiFacade.makeOrder(order)

    }
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target

        //setOrder({ userName: "phillip", products: [] })

        setOrder({ ...order, [name]: value ?? "" })

    }

    return (
        <div>

            <label>
                Username:
                <input onChange={onChange} type="text" name="username" />
            </label>
            <label>
                Brand:
                <input onChange={onChange} type="text" name="brand" />
            </label>
            <label>
                Model:
                <input onChange={onChange} type="text" name="model" />
            </label>
            <label>
                Year:
                <input onChange={onChange} type="text" name="year" />
            </label>
            <label>
                Price:
                <input onChange={onChange} type="text" name="price" />
            </label>
            <button onClick={MakeOrder}>Make order</button>

        </div>
    )
}


