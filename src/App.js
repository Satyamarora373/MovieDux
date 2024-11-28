import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
      <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
        <Routes>
          <Route path="/" element={<MovieGrid/>}></Route>
          <Route path="/watchlist" element={<WatchList/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
