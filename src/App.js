import { Route, HashRouter, Routes } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import {PersonalPhotos} from './personalPhotos/PersonalPhotos';
import {Searcher} from './search/Searcher';
import { MainPage } from "./main/MainPage";
import { PageNotFound } from "./notFound/PageNotFound";



function App() {
  return (
    
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/search" element={<Searcher />} />
        <Route path="/myPhotos" element={<PersonalPhotos />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
