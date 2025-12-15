import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resources from "./pages/Resources";

export default function App() {
    return (
        <BrowserRouter>
            <SmoothScrollWrapper>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
                <Footer />
            </SmoothScrollWrapper>
        </BrowserRouter>
    );
}
