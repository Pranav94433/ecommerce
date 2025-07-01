import './section.css';
//import Categories from './categories';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


function Sections(){
 
        return(
            <>
            <div >
         
                
            
                <h1>Welcome to Our Store</h1>
                <p>Explore our wide range of products and enjoy great deals!</p>
                
                <Outlet />
     
               
                </div>
            
            </>
        )
    }

export default Sections;