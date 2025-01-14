import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import { ProtectedRoute, AdminRoute } from "./service/Guard";
import SupplierPage from "./pages/SupplierPage";
import AddEditSupplierPage from "./pages/AddEditSupplierPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* Admin protected route for Category Page */}
                <Route path="/category" element={<AdminRoute element={<CategoryPage />} />} />
                <Route path="/supplier" element={<AdminRoute element={<SupplierPage />} />} />
                <Route path="/add-supplier" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
                <Route path="/edit-supplier/:supplierId" element={<AdminRoute element={<AddEditSupplierPage/>}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
