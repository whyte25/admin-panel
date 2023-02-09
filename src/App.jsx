import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { NewProduct } from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userid" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productid" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
