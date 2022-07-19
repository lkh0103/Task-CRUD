import React from 'react'
import { useRoutes } from 'react-router';
import Header1 from '../components/Header';
import { routes } from './Router1';
import Test from './layouts/Test';

export default function Template1() {

    const element = useRoutes(routes)

    return (
        <div>
            {/* {element} */}
            {/* <Header1 /> */}
            <Test />
        </div>
    )
}
