import {Route, Routes} from "react-router-dom"
import Home from './components/Home';
import Appart from './components/service/Appart';
import Connexion from './components/service/Connexion';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appart' element={<Appart/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
      </Routes>
    </div>
  );
}

export default App;
