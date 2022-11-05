import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Chat from "./Chat";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<>Home</>} exact />
            <Route path="/chat" element={<Chat />} exact />
        </Routes>
    </Router>
)

export default App