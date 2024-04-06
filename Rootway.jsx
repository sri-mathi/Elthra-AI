//Routes.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './DocQA/App';
import Home from './Home/Home';
import Report from './Rebort/Rebort';
import ItoT from './Image/ItoT/ItoT'
function Rootway() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/DocQA" element={<App/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/itot" element={<ItoT/>}/>
          <Route path="/" element={<App/>}/>
        </Routes>
   </BrowserRouter>
  </div>
  );
}

export default Rootway;

