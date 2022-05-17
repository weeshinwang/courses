import { useState, useEffect } from 'react'

const gql = String.raw

const queryFragment =`
name
_id
image {
    asset {
        url
        metadata {
            lqip
        }
    }
}
`

export default function useLatestData() {
    const [hotSlices, setHotSlices] = useState()
    const [slicemasters, setSlicemasters] = useState()

    console.log('yah', process.env.GATSBY_GRAPHQL_ENDPOINT)


    useEffect(function () {
        // when component loads, fetch the data
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query: gql`
                    query {
                        StoreSettings(id: "downtown") {
                        name
                        slicemaster {
                            ${queryFragment}
                            }
                        hotSlices {
                            ${queryFragment}
                            }
                        }
                    }
                `
            })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setHotSlices(res.data.StoreSettings.hotSlices)
                setSlicemasters(res.data.StoreSettings.slicemaster)
            })
            .catch(err => {
                console.log('ERROR!!', err);
            })
    }, [])

    return { hotSlices, slicemasters }
}
