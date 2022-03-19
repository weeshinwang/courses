import calculatePizzaPrice from './calPizzaPrice'
import formatMoney from './formatMoney'

export default function calculateOrderTotal(order, pizzas) {
    // loop each item in the order
    const total = order.reduce((acc, singleOrder) => {
        const pizza = pizzas.find(pi => pi.id === singleOrder.id)
        return acc + calculatePizzaPrice(pizza.price, singleOrder.size)
    }, 0)
    // calculate total for that pizza
    // add that total to the running total
    
    return formatMoney(total)
}