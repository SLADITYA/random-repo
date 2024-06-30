import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPercent, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import useOnlineStatus from '../utils/useOnlineStatus';
import './header.css';

function Header () {

    const onlineStatus = useOnlineStatus();

    return (
        <>
            <nav>
                <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp" width="100px" alt="" />
                <ul>
                    <li>
                        {/* Conditional Rendering */}
                        <span>{onlineStatus ? "🟢" : "🔴"}</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPercent} />
                        <span>Offers</span>
                    </li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span>Cart</span>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;