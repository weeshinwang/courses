import React from 'react';
import {graphql} from 'gatsby'
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import useForm from '../utils/useForm'
import calculatePizzaPrice from '../utils/calPizzaPrice';
import formatMoney from '../utils/formatMoney';
import OrderStyles from '../styles/OrderStyles';
import MenuItemStyles from '../styles/MenuItemStyles';
import usePizza from '../utils/uesPizza';
import PizzaOrder from '../components/PizzaOrder';
import calculateOrderTotal from '../utils/calculateOrderTotal';

export default function OrderPage({ data }) {

    const pizzas = data.pizzas.nodes

    const [value, updateValue] = useForm({
        name: '',
        email:'',
        sugarcane: '',
    })

    const {order, addToOrder, removeFromOrder, error, loading, message, submitOrder } = usePizza({
        pizzas,
        value
    })

    if(message) return <p>{message}</p>

    return (
        <>
            <SEO 
                title="Order a Pizza!"
            />

            <OrderStyles onSubmit={submitOrder}>
                <fieldset disabled={loading}>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        value={value.name}
                        onChange={updateValue}
                    />
                    
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id='email'
                        value={value.email}
                        onChange={updateValue}
                    />      

                    <input 
                        type="sugarcane" 
                        name='sugarcane' 
                        id='sugarcane'
                        value={value.sugarcane}
                        onChange={updateValue}
                        className='sugarcane'
                    />  

                </fieldset>

                <fieldset className='menu' disabled={loading}>
                    <legend>
                        Menu
                    </legend>
                    {pizzas.map(pizza => (
                        <MenuItemStyles key={pizza.id}>
                            <Img 
                                width='50'
                                height='50'
                                fluid={pizza.image.asset.fluid}
                                alt={pizza.name}
                            />
                            <div>
                                <h2>{pizza.name}</h2>
                            </div>
                            <div>
                                {['S', 'M', 'L'].map(size => (
                                    <button 
                                        type='button'
                                        key={`${pizza.id}-${size}`}
                                        onClick={() => addToOrder({
                                            id: pizza.id,
                                            size
                                        })}
                                    >
                                        {size} {formatMoney(calculatePizzaPrice(pizza.price, size))}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    
                    ))}
                </fieldset>
                <fieldset className='order' disabled={loading}>
                    <legend>
                        Order
                    </legend>
                    <PizzaOrder 
                        order={order}
                        removeFromOrder={removeFromOrder}
                        pizzas={pizzas}
                    />
                </fieldset>
                <fieldset>
                    <h3>Your Total is {calculateOrderTotal(order, pizzas)} </h3>
                    <div>
                        {error ? <p>{error}</p> : ''}
                    </div>
                    <button 
                        type='submit' 
                        disabled={loading}
                        className='confirm'
                    >
                        {loading ? '订单确认中...': '确认订单'}
                    </button>

                </fieldset>
            </OrderStyles>
        </>
    );
}


export const query = graphql`
    query {
        pizzas: allSanityPizza {
            nodes {
                name
                id
                price
                slug {
                    current
                }
                image {
                    asset {
                        fluid(maxWidth: 100) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }

`;