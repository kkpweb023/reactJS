import React, { useContext } from 'react';
import './NextPrev.css';
import {Button} from '@mui/material';
import { MyContext } from '../PaginateAPP';


const NextPrev = () => {

  const Details = useContext(MyContext);

  return (
    <div className='paginate_div'>
      {
            Details.page === 1 ? ""  :
            <Button
            variant="contained"
            className='btn_prev'
            onClick={()=>Details.setPage(Details.page - 1)}
            >PREV</Button>
          
      }
      <span>{Details.page}</span>
      {
        Details.page > Details.Paginate.length + 2 
        ||  Details.Paginate.length + 2  ===  Details.page -1
        ?  "" :

          <Button
                 variant="contained"
                 className='btn_next'
                 onClick={()=>Details.setPage(Details.page + 1)}
               >NEXT</Button>     
      }
    </div>
  )
}
export default NextPrev;
