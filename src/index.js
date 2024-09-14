import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bevarej from './Compunent/Bevarej';

import { DetaProvider } from './Context/SharedDeta';
import Desserts from './Compunent/Desserts';
import Drinks from './Compunent/Drinks';
import Fish from './Compunent/Fish';
import Pets from './Compunent/Pets';
import Toys from './Compunent/Toys';
import Vegetables from './Compunent/Vegetables';
import Fresh from './Compunent/Fresh';
import Allproduct from './Product/Allproduct';
import ProductDetails from './Product/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/bevarej",
    element: <Bevarej/>,
  },
  {
    path: "/dessert",
    element: <Desserts/>,
  },
  {
    path: "/drink",
    element: <Drinks/>,
  },
  {
    path: "/fish",
    element: <Fish/>,
  },
  {
    path: "/fresh",
    element: <Fresh/>,
  },
  {
    path: "/pets",
    element: <Pets/>,
  },
  {
    path: "/toys",
    element: <Toys/>,
  },
  {
    path: "/veg",
    element: <Vegetables/>,
  },
  {
    path: "/products",
    element: <Allproduct/>,
  },
  {
    path: "/product/:Ftitle/:Title",
    element: <ProductDetails/>,
  },


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DetaProvider> 
    <RouterProvider router={router} />
    </DetaProvider>
  </React.StrictMode>
);


reportWebVitals();
