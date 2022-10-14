import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import StartPage from "./pages/Start/StartPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact="exact" path='/' element={<StartPage />}/>
                <Route path='/about' element={<AboutPage />}/>
                <Route path='/contact' element={<ContactPage />}/>
            </Routes>
        </BrowserRouter>
    );
}