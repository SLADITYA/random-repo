import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { imageURL } from "../utils/mockData";
import './body.css';

function RestaurentCard (props) {

    const {imageId, offer, name, avgRating, deliveryTime, cuisines, location} = props.resDetails;

    return (
        <>
            <div className="restaurentCard">

                <img src={`${imageURL}${imageId}`} width={"240px"} height={"150px"}/>
                <h2 className="offer">{offer}</h2>
                <span><strong>{name}</strong></span>
                
                <div className="restaurent-details">
                    <div>
                        <span><FontAwesomeIcon icon={faStar} />{avgRating}</span>
                        <span> {deliveryTime}</span>
                    </div>
                    <span>{cuisines}</span>
                    <span>{location}</span>
                </div>
            
            </div>
        </>
    )
}

export default RestaurentCard;