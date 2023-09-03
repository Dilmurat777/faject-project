import './styles/App.css';
import './styles/reset.css';
import Router from './Router.jsx';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { createContext, lazy, useEffect, useState } from 'react';
import BookForm from './components/BookForm/BookForm';
import { isPathHasString } from './utils/isPathHasString';
import { Popup } from './components/Popup/Popup';

const ConnectionMenu = lazy(() => import("./components/ConnectionMenu/ConnectionMenu"));
import { Suspense } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';


export const PopupContext = createContext(null)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const isOrder = isPathHasString('order')

    if (isOrder) {
      setIsModalOpen(true)
    }
  }, [])


  const openModal = () => {
    setIsModalOpen(true);
  };


  return (
    <div className={`App ${isModalOpen ? 'modal' : ''}`}>
      <PopupContext.Provider value={{isModal: isModalOpen, setIsModal:openModal}}>
        <Header showPopupButton={!isModalOpen}/>
        <Router />
        <Footer />
      </PopupContext.Provider>
      <Suspense fallback={<PropagateLoader
          color={'#9f95ff'}
          loading={true}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh', }}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"/>}>
        {!isModalOpen && <ConnectionMenu />}
      </Suspense>
      
      <Popup content={BookForm} isOpen={isModalOpen} setClose={setIsModalOpen} />
    </div>
  );
}

export default App;

