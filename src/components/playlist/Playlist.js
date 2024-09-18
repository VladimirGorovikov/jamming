import Track from "../track/Track";
import TrackList from "../trackList/TrackList";

function Playlist({trackList, addTrackToPlaylist}) {
    return (
        <div>
            <h2>Playlist</h2>
            <TrackList trackList={trackList} />
        </div>
    )
}

export default Playlist;