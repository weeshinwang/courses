import { useContext , useState } from "react";
import OrderContext from "../components/orderContext";
import attachNamesAndPrices from "./attachNamesAndPrices";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";

export default function usePizza({ pizzas, value }) {
    // 1. create some state
    // const [order, setOrder] = useState([])
    // remove this line, we get state from provider
    const [order, setOrder] = useContext(OrderContext)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    
    // 2, make function add to things to order
    function addToOrder(orderdPizza) {
        setOrder([
            ...order,
            orderdPizza
        ])
    }

    function removeFromOrder(index) {
        setOrder([
            ...order.slice(0, index),
            ...order.slice(index + 1)
        ])
    }


    // function runs when someone submit the form
    async function submitOrder(e) {
        e.preventDefault();
        setLoading(true);
        setError(null)
        // setMessage(null)

        const body = {
            order: attachNamesAndPrices(order, pizzas),
            total: calculateOrderTotal(order, pizzas),
            name: value.name,
            email:value.email,
            sugarcane: value.sugarcane
        }
        
        const res = await fetch(`${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const text = JSON.parse(await res.text())

        if(res.status >= 400 && res.status < 600) {
            setLoading(false)
            setError(text.message)
        } else {
            setLoading(false)
            setMessage(text.message)
        }


    }



    // 3. make a function remove things from order
    // 4. send this data to a serverless function when they check out
    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder
    }
}