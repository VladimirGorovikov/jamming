import TrackList from "../trackList/TrackList";

function Playlist({trackList, addTrackToPlaylist}) {
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList trackList={trackList} trackButton='-' />
        </div>
    )
}

export default Playlist;