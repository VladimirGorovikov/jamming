/* SearchBar - component for rendering and setting the search term when changed */
function SearchBar({setSearchTerm}) {
    return (
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
    );
}

export default SearchBar;