/* SearchButton - renders a button and handles the submit */
function SearchButton({handleSubmit}) {
    return (
        <button onClick={handleSubmit}>Search</button>
    )
}

export default SearchButton;