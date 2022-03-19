import React from 'react';
import styled from 'styled-components';
import useLatestData from '../utils/useLatestData';
import { HomePageGrid, ItemsGrid } from '../styles/Grids';
import LoadingGrid from '../components/LoadingGrid';
import ItemGrid from '../components/ItemGrid';


// const P = ({ className, children }) => (
//     <p className={className}>
//         {children}
//     </p>
// );
  
const StyledP = styled.p`
    margin-bottom: 5rem;
    text-align: center;
    text-decoration: underline;
`

function CurrentSlicing({slicemasters}) {
    return (
        <div>
            <h2 className="center">
                <span className='mark tilt'>
                    😜在岗披萨大师
                </span>
            </h2>
            <StyledP >
                时刻准备，为您烘烤上好披萨
            </StyledP>

            {!slicemasters && <LoadingGrid count={4}/>}
            {slicemasters && !slicemasters?.length && (<p>暂时未有大师在场</p>)}

            {slicemasters?.length && 
            <ItemGrid 
                items={slicemasters}
            />}
            
        </div>
    )
}
function HotSlices({hotSlices}) {
    return (
        <div>
            <h2 className="center">
                <span className='mark tilt'>
                🔥当季热销披萨
                </span>
            </h2>
            <StyledP>
                绝佳美味，不容错过
            </StyledP>
            {!hotSlices && <LoadingGrid count={4}/>}
            {hotSlices && !hotSlices?.length && (<p>暂时未有热销披萨</p>)}

            {hotSlices?.length && 
            <ItemGrid 
                items={hotSlices}
            />}
            
        </div>
    )
}


export default function HomePage() {
    const { hotSlices, slicemasters } = useLatestData() 
    return (
        <>

            {/* <div className="center">
                <h1>The Best Pizza Downtown</h1>
                <p>Open 11am to 11pm Every Single Day</p>
            </div> */}
            <HomePageGrid>
                <CurrentSlicing 
                    slicemasters={slicemasters}
                />
                <HotSlices
                    hotSlices={hotSlices} 
                />
            </HomePageGrid>

        </>
    )
}
