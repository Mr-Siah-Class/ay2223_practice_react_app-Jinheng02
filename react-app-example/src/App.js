import React from 'react';
import './App.css';

import {
  Route,
  useParams,
  Routes,
  BrowserRouter
} from "react-router-dom";

import NavBar from './NavBar';
import FooterBar from './FooterBar';
import HomeScreen from './HomeScreen';
import NoScreen from './NoScreen';
import ProductsScreen from './ProductsScreen';
import SingleProductScreen from './SingleProductScreen.js';

const ProductIdWrapper = () => {
  const { productId } = useParams();
  return <SingleProductScreen productId={productId} />;
};

class App extends React.Component
{
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    render()
    {
        return (
            <div>
                <NavBar/>

                <BrowserRouter>
                  <Routes>
                    <Route exact path="/" element={<HomeScreen/>}/>
                    <Route path="/products" element={<ProductsScreen/>}/>
                    <Route path="/products/:productId" element={<ProductIdWrapper/>}/>
                    <Route path="*" element={<NoScreen/>}/>
                  </Routes>
                </BrowserRouter>

                <FooterBar/>
            </div>
        );
    }
}

export default App;
