import { useState } from "react";
import "../SearchBar.css"
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
      <div className="search-container">
    <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value); // 🔥 send to parent
        }}
      />
    
      <button onClick={() => onSearch(query)}>
        <FaSearch/>
      </button>
    </div>
  );
};

export default SearchBar;