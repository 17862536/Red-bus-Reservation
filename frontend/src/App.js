
import './App.css';
import Navbar from "./components/Navbar"
import MainPage from './components/MainPage';
import NavTicketShow from './components/NavTicketShow';
import {BrowserRouter,Routes ,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
   <Navbar/>
   <BrowserRouter>
   <Routes>
    <Route path ='/' element ={<MainPage/>}/>
    <Route path ='/booking' element ={<NavTicketShow/>}/>
   </Routes>
   </BrowserRouter>
  
    </div>
  );
}

export default App;
