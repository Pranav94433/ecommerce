// src/pages/Login.js
import './login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    return (
        <div className="button">
            <button 
                type="button" 
                className="btn btn-primary" 
                onClick={() => navigate('/signin')}
            >
                Sign in
            </button> 

            <button 
                type="buton" 
                className="btn btn-primary" 
                onClick={() => navigate('/signup')}
            >
                Sign up
            </button>
        </div>
    );
}

export default Login;
