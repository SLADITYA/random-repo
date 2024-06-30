import './body.css';

function TopRatedRestaurents (props) {
    return (
        <>
            <div className="topRated">
                <button onClick={props.topRatedFunction}>Top Rated</button>
            </div>
        </>
    )
}

export default TopRatedRestaurents;