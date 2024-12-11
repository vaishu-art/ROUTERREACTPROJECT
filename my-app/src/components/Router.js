import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./Session";
 
// to import the file 

// import Signin from "./Signin";
// import Signout from "./Signout";
import Product from "./Product";
import Electronics from "./Electronics";
import Jewelery from "./Jewellery";
import Menclothing from "./Menclothing";
import Womenclothing from "./Womenclothing";
import Cart from "./Cart";
// import search from "./Search";



function Router(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Session />}>
            <Route index element={<Product />} />
            <Route path="jewelery" element={<Jewelery/>}/>
            <Route path="electronics" element={<Electronics/>}/>
            <Route path="women's clothing" element={<Womenclothing />}/>
            <Route path="men's clothing" element={<Menclothing/>}/>
            <Route path="cart/:id" element={<Cart />} />
            {/* <Route path="search" element={<search />} /> */}

              {/* <Route path="sign-in" element={<Signin />} /> 
              <Route path="sign-out" element={<Signout />} /> */}
              {/* <Route path="Product" element={<Product />}/> */}
            </Route>
          </Routes>
        </BrowserRouter>
      );
}
export default Router