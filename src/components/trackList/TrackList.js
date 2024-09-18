import Track from "../track/Track";

function TrackList({trackList, trackButton, addTrackToPlaylist}) {
    if (trackList.length === 0) {
        return (
            <p>No tracks!</p>
        )
    }
    return (
        trackList.map((trackObject) => <Track trackObject={trackObject} trackButton={trackButton} addTrackToPlaylist={addTrackToPlaylist} />)
    );
}

export default TrackList;