import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Route, Routes} from 'react-router-dom';
import NavBar  from "./components/NavBar.jsx";
import { MovieProvider } from './contexts/MovieContext.jsx';

function App() {
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
