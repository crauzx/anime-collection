import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AnimeList from "../pages/Anime";
import AnimeDetail from "../pages/Anime/anime-detail";
import CollectionList from "../pages/Collection";
import CollectionDetail from "../pages/Collection/collection-detail";

const Main = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<AnimeList />} />
          <Route path="/collection" element={<CollectionList />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
          <Route path="/collection/:name" element={<CollectionDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Main;
