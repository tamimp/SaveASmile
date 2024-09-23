import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage"; // Import the LoginPage component
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderNav />
        <Routes>
          <Route path="/" element={<LoginPage />} />{" "}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/photos/" element={<PhotosPage />} />
          <Route path="/photos/:id" element={<PhotosPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
