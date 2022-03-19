import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const WineGridStyles = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const SingleWineStyle = styled.div`
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;
    display: grid;
    grid-template-rows: auto 1fr 1fr;
    grid-gap: 1rem;
    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        display: grid;
        align-items: center;
        font-size: 10px;
    }
    &:hover {
        box-shadow: 2px 2px 0 var(--grey);;
    }
`

export default function WinePage({ data }) {

    return (
        <>  
            <SEO 
                title={`Wines! We have ${data.wines.nodes.length} in stock`}
            />
            <h2>
                We have {data.wines.nodes.length} wines
            </h2>
            <WineGridStyles>
                {data.wines.nodes.map(wine => {
                    const rating = Math.round((wine.rating.average - 4) * 5)
                    return (
                        <SingleWineStyle key={wine.id}>
                            <img src={wine.image} alt={wine.wine} />
                            <h3>{wine.wine}</h3>
                            <p title={`${rating} out of 5 stars`}>
                                {`⭐`.repeat(rating)}
                                <span style={{filter: `grayscale(100%)`}}>
                                    {`⭐`.repeat(5 - rating)}<br />
                                </span>
                            
                                <span>{wine.rating.reviews}</span>
                            </p>
                        </SingleWineStyle>
                    )
                })}
            </WineGridStyles>
        </>
    );
}


export const query = graphql`
    query {
    wines: allWine {
        nodes {
        id
        wine
        image
        rating {
            average
            reviews
            }
        }
    }
}
`