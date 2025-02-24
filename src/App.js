import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/RootLayout";
import Error from "./pages/Error";

// https://example.com/products

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/products', element: <ProductsPage /> },
        ]
    },
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
