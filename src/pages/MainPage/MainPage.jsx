import React from 'react';
import Header from "../../components/Header/Header.jsx";
import Services from "../../components/Services/Services.jsx";
import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import About from "../../components/About/About.jsx";
import Counter from "../../components/Counter/Counter.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Main from "../../components/Main/Main.jsx";
import Ticker from "../../components/Ticker/Ticker.jsx";

import { Suspense } from "react";

import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { HeadHelmet } from '../../components/HeadHelmet/HeadHelmet.jsx';
import Test from '../../Test/Test.jsx';


const MainPage = () => {

  return (
    <>
      <HeadHelmet title='Main page' description={'Beginner friendly page for learning React Helmet.'} />
      <Header />
      <Main />
      <Ticker />
      <Services />
      <Portfolio />
      <About />
      <Counter />
      <Footer />
      {/* <Test/> */}
      {/*<CookieModal/>*/}
      {/*<SaleModal/>*/}
    </>
  );
};

export default function WrappedApp() {
  return (
    <Suspense fallback='...loading'>
      <MainPage />
    </Suspense>
  )
}