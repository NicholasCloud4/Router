import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

// https://example.com/products

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/products', element: <ProductsPage /> }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
