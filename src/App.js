import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import Home from './Component.js/home';
import QrCodeGenerator from './Component.js/qr.code.generator';

function App() {
  return (
    <div >
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/qr/generator" element={<QrCodeGenerator/>}/>
        <Route path='*' element={<Navigate to="/"/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
