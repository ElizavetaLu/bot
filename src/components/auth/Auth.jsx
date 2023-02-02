import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import "./Auth.scss"
import { logIn} from "../../redux/actions/actionCreator";


const Auth = () => {

    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(inputValue, () => navigate('/bot/build/main')));
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="title">Log In</div>

                <form onSubmit={onSubmit} className="auth-form">
                    <label className="label">
                        <span className="label-name">Login</span>
                        <input
                            type="text"
                            name="login"
                            className="auth-input"
                            value={inputValue.email}
                            onChange={e => setInputValue({ ...inputValue, email: e.target.value })}
                            required
                        />
                    </label>

                    <label className="label">
                        <span className="label-name">Password</span>
                        <input
                            type="password"
                            name="password"
                            className="auth-input"
                            value={inputValue.password}
                            onChange={e => setInputValue({ ...inputValue, password: e.target.value })}
                            required
                        />
                    </label>


                    <div className="btn-container">
                        <button type="submit" className="auth-btn">Log in</button>
                    </div>
                </form>

            </div>
        </div >
    )
}

export default Auth