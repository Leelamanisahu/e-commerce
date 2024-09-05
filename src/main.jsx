import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load all components
const App = lazy(() => import('./App.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/productList",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={appRouter}/>
  </StrictMode>,
)
