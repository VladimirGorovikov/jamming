/* Track - component for rendering a single track */
function Track({trackObject, trackButton, buttonFunc}) {
    return (
        <li> Name: {trackObject.name} Artist: {trackObject.artist} Album: {trackObject.album}
            <button onClick={() => buttonFunc(trackObject)}>{trackButton}</button>
        </li>
    )
}

export default Track;