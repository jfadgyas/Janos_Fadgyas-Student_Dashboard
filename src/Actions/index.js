export const initialize = () => {
    return {
        type: 'INITIALIZE'
    }
} 

export const filterData = (filterObject) => {
    return {
        type: 'FILTER_DATA',
        payload: filterObject
    }
} 

export const filterChart = (name, checked) => {
    return {
        type: 'FILTER_CHART',
        payload: {
            name: name,
            checked: checked
        }
    }
} 

export const sortChart = (sortOrder) => {
    return {
        type: 'SORT_CHART',
        payload: sortOrder
    }
} 