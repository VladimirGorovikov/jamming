import TrackList from "../trackList/TrackList";

function Playlist({trackList, buttonFunc, setPlaylistName}) {
    return (
        <div>
            <h2>Playlist</h2>
            <input type="text" onChange={(e) => setPlaylistName(e.target.value)}/>
            <TrackList trackList={trackList} trackButton='-' buttonFunc={buttonFunc} />
        </div>
    )
}

export default Playlist;