import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import {PersonalPhotos} from './personalPhotos/PersonalPhotos';
import {Searcher} from './search/Searcher';
import { MainPage } from "./main/MainPage";
import { PageNotFound } from "./notFound/PageNotFound";


function App() {
  return (
    
    <Router basename="custom_gallery">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/search" element={<Searcher />} />
        <Route path="/myPhotos" element={<PersonalPhotos />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
