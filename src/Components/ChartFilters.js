import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {filterChart, sortChart} from '../Actions';

const Filters = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    const handleChange = e => {
        const {name, checked} = e.target
        dispatch(filterChart(name, checked))
    }

    const handleClick = e => {
        dispatch(sortChart(e.target.id))
    }

    return (
        <div className='filter'>
            <label>
            <input
                type='checkbox'
                name='leuk'
                checked={data.series.some(item => item.name === 'leuk') && true}                    
                onChange={handleChange}/>Leuk
        </label>
        <label>
            <input
                type='checkbox'
                name='moeilijk'
                checked={data.series.some(item => item.name === 'moeilijk') && true}                      
                onChange={handleChange}/>Moeilijk
        </label>
        <button 
            id='up'
            disabled={data.series.length ? false : true}
            onClick={handleClick}>Sort (1-9)</button>
        <button
            id='down'
            disabled={data.series.length ? false : true}
            onClick={handleClick}>Sort (9-1)</button>
        </div>
    )
}

export default Filters;