import { Routes, Route } from "react-router-dom";


//css
import "./App.css";

//pages
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection";
import { NotFound } from "./pages/NotFound";
import { BookDetails } from "./pages/BookDetails";

//components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";



function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
