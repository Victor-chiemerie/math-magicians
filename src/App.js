import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navBar/navBar';
import Calculator from './components/Calculator';
import Home from './home/home';
import Quote from './components/quote';

function App() {
  return (
    <Router>
      <div className="app" />
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/c" element={<Home />} />
          <Route path="/c" element={<Calculator />} />
          <Route path="/" element={<Quote />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
