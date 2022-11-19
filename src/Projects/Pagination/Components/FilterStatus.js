import React, { useContext } from 'react';
import './FilterStatus.css';
import { Button } from '@mui/material';
import { MyContext } from '../PaginateAPP';


const FilterStatus = () => {

    const Details = useContext(MyContext);

    return (
        <div className='filter_sort_by'>

            <h6>Filter By Status:</h6>
            
            <Button
                variant="contained"
                size='small'
                className='active_btn'
                onClick={()=>Details.handleStatus("Active")}
            >ACTIVE</Button>

            <Button
                variant="contained"
                size='small'
                className='inactive_btn'
                onClick={()=>Details.handleStatus("Inactive")}
            >INACTIVE</Button>

        </div>
    )
}

export default FilterStatus;