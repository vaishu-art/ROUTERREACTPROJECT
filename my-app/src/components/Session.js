import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
 


function Session(){
    return(
        // in session to form the layout
        <>
        <Header/> 
        <link />     
        <section>
          <Outlet/>
        </section>
        <Footer/>
        </>
          )
}

export default Session