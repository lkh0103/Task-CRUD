import React, { useEffect, useState } from 'react'
import { api, EMethod } from '../../hooks/useRequest'
// import {useRequestWithState} from '../../hooks/useRequest'
import useTitle from '../../hooks/useTitle'

export default function Home() {

    // const { api, loading, error } = useRequestWithState()
    const [search, setSearch] = useState('')
    const [param, setParam] = useState('')
    useEffect(() => {
        loadUser()
    }, [param])
const loadUser =()=>{
    api(EMethod.GET,'https://jsonplaceholder.typicode.com/posts')
    .then(res=>console.log(res)
    )}

    useTitle('React project')

    // const loadUser = () => {
    //     api('https://62d0e3afd9bf9f17058ee9e2.mockapi.io/enty', param)
    //         .then((e) => {
    //             console.log('success', e)
    //         })
    //         .catch(console.error)
    // }

    // if (loading) return <div>Loading</div>
    // if (error) return <h1>{error}</h1>

    return (
        <div>
            <h2>Home</h2>
            <input value={search} onChange={(e) => {
                setSearch(e.target.value)
            }} />
            <button onClick={(e) => {
                setParam(search)
            }}>Search</button>
            
        </div>
    )
}
