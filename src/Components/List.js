import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import {filterData} from '../Actions/index';
import ListItem from './ListItem';

const List = (props) => {
    let selectedItems = 
        {
            chartType: useLocation().pathname === '/students' ? 'bar' : 'line',
            ids: []
        }
    const dispatch = useDispatch()
    
    const handleSelect = (e) =>{
        const {name, checked} = e.target
        if (checked){
            selectedItems.ids.push(name)
        }
        else {
            selectedItems.ids = selectedItems.ids.filter(item => item !== name)
        }
    }

    const handleClick = () => {
        dispatch(filterData(selectedItems))
    }

    const listItems = props.data.map(item => <ListItem key={item.id} data={item} handleSelect={handleSelect}/>)

    return (
        <div className='list-container'>
            <Link to='/datacollection'><button onClick={handleClick}>Show results</button></Link>
            <ul className='list'>
                {listItems}
            </ul>
        </div>
    )
}

export default List;