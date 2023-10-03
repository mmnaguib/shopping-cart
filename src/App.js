import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          />
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
