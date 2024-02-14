import { Routes, Route } from "react-router-dom";
import ElektricPrice from "./ElektricPrice";
import About from "./About/About";
import Navigation from "./Navigation";

function App() {
    return (
        <div className="vh-100">
            <Navigation />
            <Routes>
                <Route path="/" element={<ElektricPrice />} >
                    <Route path="lowprice/:hours" element={<ElektricPrice />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/about/:name" element={<About />} />
                <Route path="/about/me" element={<About />} />

                <Route path="*" element={<>404</>} />
            </Routes>
        </div>
    );
}

export default App;