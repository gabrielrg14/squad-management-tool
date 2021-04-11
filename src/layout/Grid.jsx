import React from 'react'

const Grid = props => {
    function toCssClasses(colsArray, offsetArray) {
        const cols = colsArray ? colsArray.split(' ') : []
        const offset = offsetArray ? offsetArray.split(' ') : []
        let classes = ''
    
        if(cols[0]) classes += `col-sm-${cols[0]}`
        if(cols[1]) classes += ` col-md-${cols[1]}`
        if(cols[2]) classes += ` col-lg-${cols[2]}`
        if(cols[3]) classes += ` col-xl-${cols[3]}`

        if(offset[0]) classes += ` offset-sm-${offset[0]}`
        if(offset[1]) classes += ` offset-md-${offset[1]}`
        if(offset[2]) classes += ` offset-lg-${offset[2]}`
        if(offset[3]) classes += ` offset-xl-${offset[3]}`
    
        return classes
    }

    const gridClasses = toCssClasses(props.cols || '12', props.offsets)

    return (
        <div className={gridClasses}>
            {props.children}
        </div>
    )
}

export default Grid