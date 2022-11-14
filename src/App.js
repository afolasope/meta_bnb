import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Components/Footer';
import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';
import ConnectWallet from './Pages/Places/Places';
import Home from './Pages/Home/Home';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Wrapper>
      <div
        className={navbarOpen ? 'overlay' : 'hide'}
        onClick={() => {
          console.log('working');
          setNavbarOpen(false);
          console.log(navbarOpen);
        }}
      ></div>
      <header>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        {navbarOpen && (
          <MobileNavbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}
export default App;

const Wrapper = styled.div`
  position: relative;

  header {
    position: relative;
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    @media (min-width: 800px) {
      display: none;
    }
  }
`;
