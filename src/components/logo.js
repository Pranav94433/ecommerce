import './logo.css';
import im from '../assets/logo.png';// Adjust the path as necessary
function Logo() {
   return (
        <div className="logo-img">
            <img src={im} alt="Phoenix logo" />

      </div>
    
    );
}
export default Logo;