import React from "react"
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom';
import ProductPage from "./components/ProductPage";
import Error from "./components/error"
function App() {
  return (
    <div className="app-section">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/product/:slug" element={<ProductPage />} />
       </Routes>
    </div>
  )
}

export default App
