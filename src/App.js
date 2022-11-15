import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Components/Footer';
import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';
import ConnectWallet from './Pages/Places/Places';
import Home from './Pages/Home/Home';
import ModalWallet from './Components/ModalWallet';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Wrapper>
      <div
        className={ isModalOpen ? 'overlay' : 'hide'}
        onClick={() => {
          setNavbarOpen(false);
          setModalOpen(false);
        }}
      ></div>
      <ModalWallet
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
      <header>
        <Navbar
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
        {navbarOpen && (
          <MobileNavbar
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          />
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  position: relative;
  header {
    position: sticky;
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
 
  }
`;
