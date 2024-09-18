import Track from "../track/Track";

function TrackList({trackList, addTrackToPlaylist}) {
    if (trackList.length === 0) {
        return (
            <p>No tracks!</p>
        )
    }
    return (
        trackList.map((trackObject) => <Track trackObject={trackObject} addTrackToPlaylist={addTrackToPlaylist} />)
    );
}

export default TrackList;