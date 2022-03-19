import React from 'react';
import { graphql } from 'gatsby'
import PizzaList from '../components/PizzaList';
import ToppingsFilter from '../components/ToppingsFilter';
import SEO from '../components/SEO';

export default function PizzasPage({ data, pageContext }) {

    const pizzas = data.pizzas.nodes;

    return (
        <>
            <SEO 
                title={pageContext.topping ? 
                    `Pizza with ${pageContext.topping}` :
                    `All Pizzas`}
            />
            <ToppingsFilter activeTopping={pageContext.topping}/>
            <PizzaList pizzas={pizzas} />
        </>
    );
}

export const query = graphql`
    query PizzaQuery($topping: [String]) {
        pizzas: allSanityPizza(filter: {
            toppings: {
                elemMatch: {
                    name: {
                        in: $topping
                    }
                }
            }
        }) {
            nodes {
                name
                id
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fixed(width: 200, height: 200) {
                            ...GatsbySanityImageFixed
                        }
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }

`;