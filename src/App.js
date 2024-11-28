import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
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
