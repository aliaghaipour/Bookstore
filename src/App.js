import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter as Router , Route , Routes}  from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
