import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const ToppingsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        .count {
            background: white;
            padding: 2px 5px;
        }
        &.active{
            background: var(--yellow);
        }
    }
`;



function countPizzasInToppings (pizzas) {
    // return the pizza count
    const counts = pizzas.map(pizza => pizza.toppings)
        .flat()
        .reduce((acc, topping) => {
            // check if this is an existing topping
            // if it is, increment by 1
            // otherwise creare a new entry in our acc and set it to one
            const existingTopping = acc[topping.id]
            if(existingTopping) {
                existingTopping.count += 1
            } else {
                acc[topping.id] = {
                    id: topping.id,
                    name: topping.name,
                    count: 1
                }
            }

            return acc
        }, {})

    const sortedToppings = Object.values(counts).sort((a, b) => b.count - a.count)
    return sortedToppings
}

export default function ToppingsFilter({ activeTopping }) {

    // get list of pizzas
    const { toppings, pizzas } = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                    vegetarian
                }
            }
            pizzas: allSanityPizza {
                nodes {
                    toppings {
                        name
                        id
                    }
                }
            }
        }
    `)

    const toppingsWithCounts = countPizzasInToppings(pizzas.nodes)

    // get a list of pizzas with their toppings
    // count how many pizzas are in each topping
    // looping over the list of pizzas and display the pizzas with the selected toppings
    
    
    return (
        <ToppingsStyles>
            
            <Link 
                to="/pizza"
                className={activeTopping === undefined ? 'active': ''}
            >
                <span className="name">All</span>
                <span className="count">{pizzas.nodes.length}</span>
            </Link>
            {toppingsWithCounts.map(topping => (
                <Link 
                    to={`/topping/${topping.name}`} 
                    key={topping.id}
                    className={topping.name === activeTopping ? 'active': ''}
                >
                    <span className='name'>{topping.name}</span>
                    <span className="count">{topping.count}</span>
            
                </Link>
            ))}
        </ToppingsStyles>
    )

}