import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
