import TrackList from "../trackList/TrackList";

function Playlist({trackList, buttonFunc}) {
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList trackList={trackList} trackButton='-' buttonFunc={buttonFunc} />
        </div>
    )
}

export default Playlist;