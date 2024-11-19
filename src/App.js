// import './App.css';
import Topnav from './componets/Topnav.tsx';
import Footer from './Pages/Footer.tsx';
import Holidays from './Pages/Holidays.tsx';
import Home from './Pages/Home.tsx';
import PopularDestinations from './Pages/PopularDestinations.tsx';
import PopularStays from './Pages/PopularStays.tsx';
import Subscribe from './Pages/Subscribe.tsx';

function App() {
  return (
    <div>
     <Topnav/>
     <Home/>
     <PopularDestinations/>
     <Holidays/>
     <PopularStays/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}

export default App;
