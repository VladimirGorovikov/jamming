/* Track - component for rendering a single track */
function Track({trackObject, trackButton, addTrackToPlaylist}) {
    return (
        <div className="track">
            <p>Name: {trackObject.name}</p>
            <p>Artist: {trackObject.artist}</p>
            <p>Album: {trackObject.album}</p>
            <button onClick={() => addTrackToPlaylist(trackObject)}>{trackButton}</button>
        </div>
    )
}

export default Track;