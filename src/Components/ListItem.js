import React from 'react';
import {Link} from 'react-router-dom';

const ListItem = (props) => {
    const handleChange = (e) => {
        props.handleSelect(e)
    }

    return (
        <li className='list-item' key={props.data.id}>
            <div className='cards'>
                <img alt='' src={props.data.photo}/>
                <Link to={props.data.name}>
                    <p id={props.data.id} onClick={handleChange}>{props.data.name} {props.data.last_name}</p>
                </Link>            
                <p>{props.data.age}</p>
                <p>{props.data.phone}</p>
                <p>{props.data.email}</p>
                <input 
                    type='checkbox'
                    name={props.data.id}
                    onChange={handleChange}/>
            </div>
        </li>
    )
}

export default ListItem;