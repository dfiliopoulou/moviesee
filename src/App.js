import { Routes, Route } from "react-router-dom";
import Searched from "./pages/Searched";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";

//(https://reactrouter.com/docs/en/v6)

import "./App.css";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";

export default function App() {
  // (path="/:id") the :id is the variable in the url
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<SingleMovie />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/toprated" element={<TopRated />} />
    </Routes>
  );
}
