//usestate Hook allows us to track state in a function component
import {useState} from "react";

//Include Navbar Component
import Navbar from "./components/Navbar";
//Include Header Component
import Header from "./components/Header";
//Include Product Rate Card Component
import ProductRateCard from "./components/ProductRateCard";
//Include Footer Component
import Footer from "./components/Footer";



function App() {
    //The first value, count, is our current state.
    //The second value, setcount, is the function that is used to update our state.
    //We can use State any where in our component.
    let [count,setcount] = useState(0);
    const product ='';



  return (
    <>
         {/* Sending count and setcount values to header to render the cart value */}
         <Navbar count={count} setcount={setcount}/>
         <Header/>
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
             {/* Showing the product information  */}
            <ProductRateCard imgSrc={'https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg'} product={`Model 1`} rate ={`$10`} count={count} setcount={setcount}/>
            <ProductRateCard imgSrc={'https://img.freepik.com/premium-vector/angel-investor-onboarding-page-with-businessmen-flat-vector-illustration_181313-3902.jpg'} product={`Model 2`} rate ={`$20`} count={count} setcount={setcount}/>
            <ProductRateCard imgSrc={'https://i.pinimg.com/474x/7e/48/20/7e4820ee46ad834470df46f5f9f6f021.jpg'} product={`Model 3`} rate ={`$30`} count={count} setcount={setcount}/>
            <ProductRateCard imgSrc={'https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg'}product={`Model 4`} rate ={`$40`} count={count} setcount={setcount}/>
           
            <ProductRateCard imgSrc={'https://img.freepik.com/premium-psd/smartphone-screen-mockup-design-branding_772836-223.jpg'} product={`Model 5`} rate ={`$50`} count={count} setcount={setcount}/>
            <ProductRateCard imgSrc={'https://img.freepik.com/free-vector/phone-with-gradient-wallpaper_23-2147850273.jpg'} product={`Model 6`} rate ={`$60`} count={count} setcount={setcount}/>
          
            <ProductRateCard imgSrc={'https://img.freepik.com/free-vector/change-our-date-postponed-wedding-phone-app_52683-39982.jpg'}product={`Model 7`} rate ={`$70`} count={count} setcount={setcount}/>
            <ProductRateCard imgSrc={'https://img.freepik.com/premium-vector/angel-investor-onboarding-page-with-businessmen-flat-vector-illustration_181313-3902.jpg'} product={`Model 10`} rate ={`$100`} count={count} setcount={setcount}/>
                
            </div>
        </div>
    </section>
     {/* Showing the Footer information  */}
    <Footer/>
    </>
  )
}
export default App
