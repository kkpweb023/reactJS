import React, { createContext, useEffect, useState } from 'react';
import FilterStatus from './Components/FilterStatus';
import NextPrev from './Components/NextPrev';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import Sort from './Components/Sort';
import TablePro from './Components/Table';
import './PaginateAPP.css';


export const MyContext = createContext();

const PaginateAPP = () => {

  ///Data fetched from json

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://kkpweb023.github.io/myServer/users.json")
      .then((result) => setData(result.data.users))
      .catch((error) => console.log("! data fetch failed"));
  }, [])

  /// Input field data and filter from json data

  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const SearchList = data.filter((value) => value.name.toLowerCase().startsWith(search));

  /// Filter search data  
  // Condition status 

  const [flag, setFlag] = useState(true);
  const [filter, setFilter] = useState([]);
    
  function handleStatus(status) {
    const Status = SearchList.filter((value) => value.status.startsWith(status));
    setFilter(Status);
    setFlag(false);
  
  }

///pagination

const [page,setPage] = useState(1);

const postPerPage = 4;
const currentPage = page;
const lastIndex = currentPage * postPerPage;
const firstIndex = lastIndex - postPerPage;

const Paginate = SearchList.slice(firstIndex,lastIndex); 

const FilterSearch = filter.filter((value) =>value.name.toLowerCase().startsWith(search));
const StatusPaginate = FilterSearch.slice(firstIndex,lastIndex);


///sorting by selecting
  const [selectSort,setSelectSort] = useState();
  data.sort((a, b) => a[selectSort] < b[selectSort] ? -1 : 1);
  filter.sort((a, b) => a[selectSort] < b[selectSort] ? -1 : 1);
  StatusPaginate.sort((a, b) => a[selectSort] < b[selectSort] ? -1 : 1);


 





 

  return (

    <MyContext.Provider
      value={
        {
          SearchList,
          name,
          setName,
          setSearch,
          handleStatus,
          filter,
          flag,
          setFlag,
          FilterSearch,
          setSelectSort,
          selectSort,
          page,
          setPage,
          currentPage,
          Paginate,
          StatusPaginate

        }
      }>

      <div className='PaginateAPP_div'>
        <SearchBar />
        <TablePro />
        <NextPrev />
        <Sort />
        <FilterStatus />
      </div>
    </MyContext.Provider>
  )
}

export default PaginateAPP;