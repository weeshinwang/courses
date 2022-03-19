import path, { resolve } from 'path'
import fetch from 'isomorphic-fetch'


async function turnPizzasIntoPages({ graphql, actions}) {
    // 1. creating a template page
    const pizzaTemplate = path.resolve('./src/templates/Pizza.js')


    // 2. Query all pizzas

    const { data } = await graphql(`
        query {
            pizzas: allSanityPizza {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    // 3. loop over each pizza and create a page for that pizza

    data.pizzas.nodes.forEach(pizza => {
        actions.createPage({
            path: `pizza/${pizza.slug.current}`,
            component: pizzaTemplate,
            context: {
                slug: pizza.slug.current
            }
        })
    })

}

async function turnToppingsIntoPages({graphql, actions}) {
    // 1. get the template
    const toppingTemplate = path.resolve('./src/pages/pizza.js')
    // 2. query all the toppings

    const {data} = await graphql(`
        query {
            toppings: allSanityTopping {
                nodes {
                    name
                    id
                }
            }

        }
    
    `)

    // 3. createPage for that topping
    data.toppings.nodes.forEach(topping => {
        actions.createPage({
            path: `topping/${topping.name}`,
            component: toppingTemplate,
            context: {
                topping: topping.name
            }
        });
    })

    // 4. pass topping data to pizza.js


}





async function fetechWinesAndTurnIntoNodes({
    actions,
    createNodeId,
    createContentDigest
}) {
    // 1. fetch list of beers
    // 2. loop over each one
    // 3. create a node for that beer
    const res = await fetch('https://api.sampleapis.com/wines/reds')
    const wines = await res.json()

    for(const wine of wines) {
        const nodeContent = JSON.stringify(wine)
        const nodeMeta = {
            id: createNodeId(`wine-${wine.wine}`),
            parent: null,
            children: [],
            internal: {
                type: 'Wine',
                mediaType: 'application/json',
                contentDigest: createContentDigest(wine)
            }
        }
        actions.createNode({
            ...wine,
            ...nodeMeta
        })
    }
}

async function turnSlicemastersIntoPages({graphql, actions}) {
    // 1. query all the slicemasters
    const {data} = await graphql(`
        query {
            slicemasters: allSanityPerson{
                totalCount
                nodes {
                    name
                    id
                    slug {
                        current
                    }
                }
            }
        }
    
    
    `)

    // 2. turn each slicemaster into their own page
    data.slicemasters.nodes.forEach(slicemaster => {
        actions.createPage({
            component: resolve('./src/templates/Slicemaster.js'),
            path: `/slicemasters/${slicemaster.slug.current}`,
            context: {
                name: slicemaster.person, 
                slug: slicemaster.slug.current
            }


        })
    })


    // 3. figure out how many pages there are based on how many slicemasters ther are and how many per page
    // loop from 1 to n and create the pages 

    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
    const pageCount = Math.ceil(data.slicemasters.totalCount / pageSize)
    
    Array.from({length: pageCount}).forEach((_, i) => {
        actions.createPage({
            path:`/slicemasters/${i + 1}`,
            component: path.resolve('./src/pages/slicemasters.js'),
            // data pass to the template
            context: {
                skip: i * pageSize, 
                currentPage: i + 1,
                pageSize
            }

        })
    })
}


export async function createPages(params) {

    await Promise.all([
        turnPizzasIntoPages(params),
        turnToppingsIntoPages(params),
        turnSlicemastersIntoPages(params)
    ])
    // Create pages dynamically
    // 1. Pizzas 
    // 2. Toppings
    // 3. Slicemasters

}

export async function sourceNodes(params) {
    // fetech a list beers and aource them into our gatsby api
    await Promise.all([fetechWinesAndTurnIntoNodes(params)])

}