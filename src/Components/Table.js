import React from 'react';
import {useSelector} from 'react-redux';

import ChartFilters from './ChartFilters';

const Table = () => {
    const data = useSelector(state => state)
        
    const columnHeader = (
        <tr>
            <td>Name</td>
            {data.series.map(item => <td>{item.name}</td>)}
        </tr>
    )

    const rows = data.categories.map((item, index) => 
        <tr>
            <td>{item}</td>
            {data.series.map(elem => <td>{elem.data[index]}</td>)}
        </tr>
    )

    return(
        <div>
            <ChartFilters />
            <table>
                <thead>
                    {columnHeader}
                </thead>
                <tbody>                    
                    {rows}
                </tbody>
            </table>            
        </div>
    )
}

export default Table;