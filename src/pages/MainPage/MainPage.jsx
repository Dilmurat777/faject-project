import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header.jsx";
import Services from "../../components/Services/Services.jsx";
import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import About from "../../components/About/About.jsx";
import Counter from "../../components/Counter/Counter.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Main from "../../components/Main/Main.jsx";
import Ticker from "../../components/Ticker/Ticker.jsx";
import { HeadHelmet } from '../../components/HeadHelmet/HeadHelmet.jsx';
import Prices from '../../components/Prices/Prices.jsx';
import PropagateLoader from "react-spinners/PropagateLoader";


// import { Suspense } from "react";
// import Test from '../../Test/Test.jsx';
// import { Helmet } from 'react-helmet';
// import { useEffect } from 'react';


const MainPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>
    {
      loading ?   
      <PropagateLoader
      color={'#9f95ff'}
      loading={loading}
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', }}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    : 
     <>
       <HeadHelmet title='Main page' description={'Beginner friendly page for learning React Helmet.'} /> {/* write here your meta for Main page*/}
      <Header />
      <Main />
      <Ticker />
      <Services />
      <Portfolio />
      <Prices/>
      <About />
      <Counter />
      <Footer />
      {/* <Test/> */}
      {/*<CookieModal/>*/}
      {/*<SaleModal/>*/}
     </>
     } 
    </>
  );
};

export default MainPage
