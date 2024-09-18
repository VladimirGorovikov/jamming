import Track from "../track/Track";

/* SearchResults - component for rendering a list of tracks */
function SearchResults({trackList}) {


    if (trackList.length === 0) {
        return (
            <div>
                <h2>Search Results</h2>
                <p>No tracks found!</p>
            </div>  
        );
    }

    return (
        <div>
            <h2>Search Results</h2>
            {trackList.map((trackObject) => <Track trackObject={trackObject} />)}
        </div>
    );
}

export default SearchResults;