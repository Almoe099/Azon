import SearchIcon from "../../pictures/search.png";
import './SearchBar.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from '../../store/search';
import { useNavigate } from 'react-router-dom'; 


const SearchBar = () => {

    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
      const query = e.target.value;
      setSearch(query);
      dispatch(fetchSearch(query));
    };
  
    const handleSearchEnter = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigate(`/products/search?q=${search}`);
      }
    };
  
    const handleClick = (e) => {
      e.preventDefault();
      navigate(`/products/search?q=${search}`);
    };
  
    
    return (
        <div className="searchBar">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search Azon"
            onChange={handleSearch} 
            onKeyDown={handleSearchEnter}
          />

          <img className="searchIcon" src={SearchIcon} id="search"  onClick={handleClick}/>
        </div>
    )

}

export default SearchBar