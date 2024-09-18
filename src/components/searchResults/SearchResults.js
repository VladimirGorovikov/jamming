import TrackList from "../trackList/TrackList";

/* SearchResults - component for rendering a list of tracks */
function SearchResults({trackList, buttonFunc}) {
        return (
            <div>
                <h2>Search Results</h2>
                <TrackList trackList={trackList} trackButton='+' buttonFunc={buttonFunc}/>
            </div>
        )
}

export default SearchResults;