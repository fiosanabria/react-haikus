import "./App.css";
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from "./layout/Footer";
import Home from "./home/Home"
import Contactanos from "./Contactanos/Contactanos";
import Compartir from "./Compartir/Compartir";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return <>

    <Router>
      <Header />
      <Main >
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contactanos" element={<Contactanos/> } />
        </Routes>
        <Compartir/>
      </Main>
      <Footer />
    </Router>
  </>
}

export default App;
