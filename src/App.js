import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
