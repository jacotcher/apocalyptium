import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";


function App() {
    return (
        <div className="App">
            <div className="app">
                <Header/>
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
