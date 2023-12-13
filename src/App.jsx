import { Routes, Route } from "react-router-dom";

//css
import "./App.css";

//pages
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { BookDetails } from "./pages/BookDetails";

//components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Admin } from "./pages/Admin";

function App() {
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);
  return (
    <div className="app">
      {showNavbarAndFooter && (
          <Navbar />
      )}
      <main className="">
        <Routes>
          <Route path="/" element={<Home setShowNavbarAndFooter={setShowNavbarAndFooter}  />} />
          <Route path="/collection" element={<Collection setShowNavbarAndFooter={setShowNavbarAndFooter} />} />
          <Route path="/:key" element={<BookDetails setShowNavbarAndFooter={setShowNavbarAndFooter} />} />
          <Route path="*" element={<NotFound setShowNavbarAndFooter={setShowNavbarAndFooter}/>} />
          <Route path="/login" element={<Login setShowNavbarAndFooter={setShowNavbarAndFooter}/>} />
          <Route path="/admin" element={<Admin setShowNavbarAndFooter={setShowNavbarAndFooter}/>} />

          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>
      {showNavbarAndFooter && (
          <Footer />
      )}
    </div>
  );
}

export default App;
