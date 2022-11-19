import React, { useContext } from 'react';
import './FilterStatus.css';
import { MyContext } from '../PaginateAPP';

const Sort = () => {

    const Details = useContext(MyContext);

    return (
        <div className='sort_by'>
            <h6>Sort By:</h6>
            <select className='sort_select'  onChange={(e)=>Details.setSelectSort(e.target.value)}>
                <option>Please Select Value</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="address">Address</option>
                <option value="status" >Status</option>
            </select>
        </div>
    )
}
export default Sort;