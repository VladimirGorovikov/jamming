import Track from "../track/Track";

function Playlist({trackList, addTrackToPlaylist}) {
    if (trackList.length === 0) {
        return (
            <div>
                <h2>Playlist</h2>
                <p>No tracks in playlist!</p>
            </div>  
        );
    }

    return (
        <div>
            <h2>Playlist</h2>
            {trackList.map((trackObject) => <Track trackObject={trackObject} addTrackToPlaylist={addTrackToPlaylist} />)}
        </div>
    );
}

export default Playlist;