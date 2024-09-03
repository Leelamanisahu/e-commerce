import {lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetails from './components/ProductDetails.jsx';

const Home = lazy(()=>import('./components/Home.jsx'));

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound/>,
    children:[
        {
          path:"/",
          element:(
            <Suspense fallback={<div>loading...</div>}>
              <Home/>
            </Suspense>
          )
        },
        {
          path:"/productList",
          element:(
            <Suspense fallback={<div>loading...</div>}>
              <ProductList/>
            </Suspense>
          )
        },
        {
          path:"/product/:id",
          element:(
            <Suspense fallback={<div>loading...</div>}>
              <ProductDetails/>
            </Suspense>
          )
        },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}/>
  </StrictMode>,
)
