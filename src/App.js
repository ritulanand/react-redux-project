
import './App.css';
import Header from "./components/Header";
import CardsDetails from './components/CardsDetails';
import Cards from "./components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Cards />}/>
        <Route  path="/cart" element={<CardsDetails />}/>
      </Routes>
      </BrowserRouter> */}
      
    </>
  );
}

export default App;
