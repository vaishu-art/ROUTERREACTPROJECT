import {Link} from 'react-router-dom'
const Header =() => {
    
    return(
    <>
         {/* <header>Cities</header> */}
         <header class="header"> 
             {/* <h1 class="company-name">AJIO</h1>  */}
             <Link to="/"><img src="https://tse2.mm.bing.net/th?id=OIP._n7pJblBIP4UKTnOGepvmQHaFj&pid=Api&P=0&h=220" alt="company name"className="logo"/></ Link>
             <h1 class="company-name">V-shopping</h1> 
             {/* <div className="search-bar">
                    <select>
                        <option value="all">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Jewelry</option>
                        <option value="home">Mens Clothing</option>
                        <option value="beauty">Womens Clothing</option>
                    </select>
                    <input type="text" placeholder="Search for products and more..." />
                     
                </div> */}
             
         <div class="auth-buttons"> 
                <button class="btn">Sign In</button> 
                <button class="btn">Sign Out</button> 

            </div>
            </header>
            </>
    )
   }

export default Header;