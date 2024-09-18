/* Track - component for rendering a single track */
function Track({trackObject}) {
    return (
        <div className="track">
            <p>Name: {trackObject.name}</p>
            <p>Artist: {trackObject.artist}</p>
            <p>Album: {trackObject.album}</p>
        </div>
    )
}

export default Track;