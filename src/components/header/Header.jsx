import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { logOut } from "../../redux/actions/actionCreator";
import "./Header.scss"

const Header = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    if (pathname === '/auth') return

    return (
        <header className="header">
            <div className="home" onClick={() => navigate('/bot/build/main')}>
                <img src="/bot/build//images/icons/icons8-home-64.png" alt="" className="home-img" />
            </div>
            <div className="sign-status">
                <div className="settings" onClick={() =>navigate('/bot/build/settings')}>
                    <img src="/bot/build//images/icons/settings-svgrepo-com.svg" alt="" className="settings-img" />
                </div>
                <div className="sign">
                    <div className="icon">
                        <img src="/bot/build//images/icons/sign-out-svgrepo-com.svg" alt="" className="sign-img" />
                    </div>
                    <div className="text" onClick={() => {
                        navigate('/bot/build/auth');
                        dispatch(logOut());
                    }}>
                        Log Out</div>
                </div>
            </div>

        </header>
    )
}

export default Header