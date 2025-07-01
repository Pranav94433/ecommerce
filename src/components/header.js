import './header.css';
import { useNavigate } from 'react-router-dom';  
import Login from "./login";
import Logo from "./logo";
import { FaHome } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/categories');
  };

  
  return (
    <header className="head d-flex align-items-center justify-content-between" role="banner">
      <div className="logo-section d-flex align-items-center">
        <Logo />
      </div>

      <div className="title-center text-center flex-grow-1">
        <h1 className="mb-0">PRANAV SHOPPING</h1>
      </div>

      <div className="button">
        <button className="btn btn-primary" i class="fa fa-home" onClick={handleHomeClick}>
         Home <FaHome />
         
        </button>

        <Login />
      </div>
    </header>
  );
}

export default Header;
