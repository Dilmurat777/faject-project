import { HeadHelmet } from '../../components/HeadHelmet/HeadHelmet.jsx';
import React, { Suspense } from 'react';
import { lazy } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";


// Use React.lazy for components imports
const Main = lazy(() => import("../../components/Main/Main.jsx"));
const Ticker = lazy(() => import("../../components/Ticker/Ticker.jsx"));
const Services = lazy(() => import("../../components/Services/Services.jsx"));
const Portfolio = lazy(() => import("../../components/Portfolio/Portfolio.jsx"));
const Prices = lazy(() => import("../../components/Prices/Prices.jsx"));
const About = lazy(() => import("../../components/About/About.jsx"));
const Counter = lazy(() => import("../../components/Counter/Counter.jsx"));


const MainPage = () => {
  return (
    <Suspense fallback={<PropagateLoader
      color={'#9f95ff'}
      loading={true}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', }}
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />}>
      <HeadHelmet title='Main page' description={'Beginner-friendly page for learning React Helmet.'} />
      <Main />
      <Ticker />
      <Services />
      <Portfolio />
      <Prices />
      <About />
      <Counter />
    </Suspense>
  );
};

export default MainPage;
