/* SearchButton - renders a button and handles the submit */
function SearchButton({searchFunc}) {
    return (
        <button onClick={searchFunc}>Search</button>
    )
}

export default SearchButton;