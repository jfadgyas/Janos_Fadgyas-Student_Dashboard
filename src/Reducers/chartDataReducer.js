import exerciseData from '../data/exerciseData.json';
import studentData from '../data/studentData.json';

const initial = {
    type: 'bar',
    categories: [],
    series: []
}

let prevData    
    
const getAverage = (data, which, selectedItems) => {
    const average = data.map(item => (item.reduce((sum, elem) => sum + elem[which],0)/selectedItems.length).toFixed(2))
    return average
}
    
const chartDataReducer = (state=initial, action) => {
    let xAxis
    let newSeries
    let newState
    
    switch (action.type){
        case 'FILTER_DATA':
            let filteredData            
            if (action.payload.chartType === 'bar'){
                xAxis = exerciseData.map(item => item.name)
                filteredData = exerciseData.map(item => item.results.filter(elem => action.payload.ids.includes(elem.studentId)))
            }
            else {
                xAxis = studentData.map(item => `${item.name} ${item.last_name}`)
                const tempData = exerciseData.filter(item => action.payload.ids.includes(item.id))
                filteredData = tempData[0].results.map((item, index) => tempData.map(elem => {return {leuk: elem.results[index].leuk, moeilijk: elem.results[index].moeilijk}}))
            }
            newSeries = [
                {name: 'leuk', data: getAverage(filteredData, 'leuk', action.payload.ids)},
                {name: 'moeilijk', data: getAverage(filteredData, 'moeilijk', action.payload.ids)}
            ]
            newState = Object.assign({}, state, {series: newSeries}, {categories: xAxis}, {type: action.payload.chartType})
            prevData = null
            return newState
        case 'FILTER_CHART':
            let newData
            if (!prevData){
                prevData = state
            }
            if (action.payload.checked){
                newData = [...state.series].concat({name: action.payload.name, data: prevData.series.find(item => item.name === action.payload.name).data})
            }
            else {
                newData = state.series.filter(item => item.name !== action.payload.name)
            }
            newState = Object.assign({}, state, {series: newData})
            return newState
        case 'SORT_CHART':
            const average = state.series[0].data.map((item, index) => {
                const averageData = state.series.reduce((sum, elem) => sum + parseFloat(elem.data[index]), 0) / state.series.length
                return {x: state.categories[index], y: averageData}
            })
            average.sort((item1, item2) => item1.y - item2.y)
            if (action.payload !== 'up'){
                average.reverse()
            }
            let xValues = []
            newSeries = state.series.map(item => {return {name: item.name, data: []}})
            average.map(item => {
                const index = state.categories.findIndex(elem => elem === item.x)
                xValues.push(item.x)
                state.series.map((unit, counter) => newSeries[counter].data.push(state.series[counter].data[index]))
            })
            newState = Object.assign({}, state, {series: newSeries}, {categories: xValues})
            return newState
        case 'INITIALIZE':
            xAxis = exerciseData.map(item => item.name)
            const allStudentsLeuk = exerciseData.map(item => {
                return item.results.reduce((sumLeuk, elem) => {return sumLeuk + elem.leuk},0)/10
            })
            const allStudentsMoeilijk = exerciseData.map(item => {
                return item.results.reduce((sumMoeilijk, elem) => {return sumMoeilijk + elem.moeilijk},0)/10
            })
            newSeries = [
                {name: 'leuk', data: allStudentsLeuk},
                {name: 'moeilijk', data: allStudentsMoeilijk}]
            newState = Object.assign({}, state, {series: newSeries}, {categories: xAxis})
            return newState
        default: 
            return state
    }
}

export default chartDataReducer;