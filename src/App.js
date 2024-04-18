import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Aboutus from './components/Aboutus/Aboutus';
import Menuextend from './components/Menuextend/Menuextend';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Copyright from './components/copyright/Copyright';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Aboutus/>
      <Menuextend/>
      <Services/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
