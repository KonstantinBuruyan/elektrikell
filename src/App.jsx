import { Routes, Route } from "react-router-dom";
import ElektricPrice from "./ElektricPrice";
import About from "./About/About";
import Navigation from "./Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ElektricPrice />} >
                  <Route path="lowprice/:hours" element={<ElektricPrice/>} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="/about/contact" element={<About />} />
               
                <Route path="*" element={<>404</>} />
            </Routes>
        </>
    );
}

export default App;