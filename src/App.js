import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./components/pages/Accueil";
// import Caverne from "./components/pages/Caverne";
// import Propos from "./components/pages/Propos";


function App() {
  return (
    <div id="grille">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          {/* <Route path='/caverne' element={<Caverne />} />
          <Route path='/propos' element={<Propos />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
