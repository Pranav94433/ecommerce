
import Lay from "./layout";
import Categories from "./categories";
import Elec from "./electronics";
import Jewl from "./jewellery";
import MensWear from "./menswear";
import WomensWear from "./womenswear";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Details from "./details";
import AllProducts from "./allproduct";
import SignIn from "./singin";
import SignUp from "./signup";





function Routerex(){

 
        return(
            <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lay />}>
          <Route index element ={<Categories />}/>
          <Route path="/electronics" element={<Elec />} />
          <Route path="/jewelery" element={<Jewl />} />
          <Route path="/men's clothing" element={<MensWear/>} />
          <Route path="/prodDetails/:id" element={<Details />} />
          <Route path="/women's clothing" element={<WomensWear/>} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                 <Route path="/categories" element={<Categories />} />

          </Route>
        
      </Routes>
    </BrowserRouter>
    </>
            
 
)
}

export default Routerex;