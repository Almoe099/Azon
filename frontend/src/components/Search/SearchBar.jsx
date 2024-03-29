import SearchIcon from "../../pictures/search.png";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch } from '../../store/search';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';


const SearchBar = () => {

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const results = useSelector((state) => state.search);
  const searchResults = results?.search || [];
  const products = Object.values(searchResults);
  const maxResultsToShow = 5;
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (clickedOutside) {
      setShowModal(false);
    }
  }, [clickedOutside]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    dispatch(fetchSearch(query));
    setShowModal(true);
  };

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/products/search?q=${search}`);
      setShowModal(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/products/search?q=${search}`);
    setShowModal(false);
  };

  const handleSelectProduct = (productId) => {
    navigate(`/products/${productId}`);
    setShowModal(false);
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.slice(0, maxLength)}...`;
    }
    return name;
  };
    

  return (
    <div className="searchBar" ref={dropdownRef}>
      <input
        type="text"
        className="inputSearch"
        placeholder="Search Azon"
        onChange={handleSearch} 
        onKeyDown={handleSearchEnter}
      />
      <img className="searchIcon" src={SearchIcon} id="search" onClick={handleClick}/>
      {showModal && (
        <div className="searchDropdown">
          {products.slice(0, maxResultsToShow).map(product => (
            <div className='searchProductResult' key={product.id} onClick={() => handleSelectProduct(product.id)}>
              {truncateName(product.name, 110)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

}

export default SearchBar
