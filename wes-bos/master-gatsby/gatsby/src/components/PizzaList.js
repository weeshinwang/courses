import React from 'react'
import { Link } from 'gatsby';
import Img from 'gatsby-image'
import styled from 'styled-components'
import usePizza from '../utils/uesPizza';



const PizzaGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 4rem;
    grid-auto-rows: auto auto 500px;
`

const PizzaStyles = styled.div`
    display: grid;
    // Take your row sizing not from the PizzaStyles but from PizzaGridStyles
    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto 500px
    }
    grid-template-rows: var(--rows, subgrid);
    grid-row: span 3;
    grid-gap: 1rem;
    h2,
    p {
        margin: 0;
    }
`



export default function PizzaList({ pizzas }) {

    return (
        <PizzaGridStyles>
            {pizzas.map(pizza => (
                <SinglePizza key={pizza.id} pizza={pizza}/>
            ))}
        </PizzaGridStyles>
    );
}


function SinglePizza({ pizza }) {
    const {order, addToOrder, removeFromOrder } = usePizza({
        pizza,
    })

    return (
        <PizzaStyles>
            <Link to={`/pizza/${pizza.slug.current}`}>
                <h2>
                    <span className='mark'>{pizza.name}</span>
                </h2>
            </Link>
            <p>
                {pizza.toppings.map(top => top.name).join(', ')}
            </p>
            <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />

        </PizzaStyles>
    )
    
}