import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import {GridPhotos} from './grid/GridPhotos'
import {PersonalPhotos} from './personalPhotos/PersonalPhotos'
import {Searcher} from './search/Searcher'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<GridPhotos />} />
        <Route path="/search" element={<Searcher />} />
        <Route path="/myPhotos" element={<PersonalPhotos />} />
      </Routes>
    </Router>
  );
}

export default App;
