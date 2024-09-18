import Track from "../track/Track";

function TrackList({trackList, trackButton, buttonFunc}) {
    if (trackList.length === 0) {
        return (
            <p>No tracks!</p>
        )
    }

    return (
        <ul>
            {trackList.map((trackObject) => <Track trackObject={trackObject} trackButton={trackButton} buttonFunc={buttonFunc} />)}
        </ul>
    );
}

export default TrackList;