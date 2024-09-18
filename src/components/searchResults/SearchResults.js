import Track from "../track/Track";
import TrackList from "../trackList/TrackList";

/* SearchResults - component for rendering a list of tracks */
function SearchResults({trackList, addTrackToPlaylist}) {
        return (
            <div>
                <h2>Search Results</h2>
                <TrackList trackList={trackList} trackButton='+' addTrackToPlaylist={addTrackToPlaylist}/>
            </div>
        )
}

export default SearchResults;