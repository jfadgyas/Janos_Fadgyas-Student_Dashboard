import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {initialize} from '../Actions';
import Diagram from './ChartComponent';
import ChartFilters from './ChartFilters';

const Home = () => {    
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    if (data.categories.length === 0){
        dispatch(initialize())
    }

    return (
        <div>
            <ChartFilters />
            <Diagram data={data} />
        </div>
    )
}

export default Home;