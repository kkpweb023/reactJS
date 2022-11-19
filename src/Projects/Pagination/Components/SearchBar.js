import React, { useContext } from 'react';
import './SearchBar.css';
import { Button } from 'react-bootstrap';
import { MyContext } from '../PaginateAPP';

const SearchBar = () => {

    const Details = useContext(MyContext);

    function handleReset(){
        
            Details.setSearch('');
            Details.setFlag(true);
            Details.setPage(1);    

    }
     
    return (
        <div className='search_pagi_div'>
            <input type="text" value={Details.name} className="search-input" placeholder="Search Name..." onChange={(e)=>Details.setName(e.target.value)}/>

           <Button variant="dark" size='small' className='search_btn' onClick={()=>Details.setSearch(Details.name)}>SEARCH</Button>

           <Button   size='small' className='reset_btn' onClick={handleReset}>RESET</Button>
        </div>
    )
}

export default SearchBar;