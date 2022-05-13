import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import {PersonalPhotos} from './personalPhotos/PersonalPhotos';
import {Searcher} from './search/Searcher';
import { MainPage } from "./main/MainPage";


function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/search" element={<Searcher />} />
        <Route path="/myPhotos" element={<PersonalPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
