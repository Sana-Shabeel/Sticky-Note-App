import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="center">
      <div className="search-container">
        <input
          onChange={(e) => handleSearchNote(e.target.value)}
          type="text"
          className="search-input"
          placeholder="type to search"
        />
        <MdSearch className="search-icon" size="1.3em" />
      </div>
    </div>
  );
}
export default Search;
