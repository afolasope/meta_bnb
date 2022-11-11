import { Route, Routes } from 'react-router-dom';
import ConnectWallet from './Pages/ConnectWallet/ConnectWallet';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
    </>
  );
}

export default App;
