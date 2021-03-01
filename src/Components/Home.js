import React from 'react';
import {useDispatch} from 'react-redux';

import studentData from '../data/studentData.json';
import exerciseData from '../data/exerciseData.json';
import {initialize, filterData} from '../Actions';
import Diagram from './ChartComponent';
import ChartFilters from './ChartFilters';

const Home = ({match}) => {
    const dispatch = useDispatch()

    if (match.path==='/'){
        dispatch(initialize())
    }
    else if(match.url==='/datacollection'){
    }
    else{
        let id
        let isStudent = studentData.find(item => item.name === match.params.name)
        if (isStudent){
            id = isStudent.id
        }
        else{
            id = exerciseData.find(item => item.name === match.params.name).id
        }
        let selectedItems = {
            chartType: isStudent ? 'bar' : 'line',
            ids: [id]
        }
        dispatch(filterData(selectedItems))
    }

    return (
        <div>
            <ChartFilters />
            <Diagram />
        </div>
    )
}

export default Home;