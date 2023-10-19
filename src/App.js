import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Film'
import Detail from './components/Detail';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Film />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
