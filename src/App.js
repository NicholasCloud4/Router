import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

// https://example.com/products

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:productId', element: <ProductDetailPage /> },
        ]
    },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
