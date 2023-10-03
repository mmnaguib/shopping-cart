import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/filteredProducts/:type" element={<Products />} />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
