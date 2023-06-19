import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Beers from './Beers';
import Burgers from './Burgers';
import Checkout from './Checkout';
import Classicmains from './Classicmains';
import Crisps from './Crisps';
import Drinks from './Drinks';
import Foods from './Foods';
import Home from './Home';
import Snacks from './Snacks';
import SoftDrinks from './SoftDrinks';
import Starters from './Starters';
import Vodka from './Vodka';

function AllRouters() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                  <Route  element={<Drinks />}>
                    <Route index element={<Beers />} />
                    <Route path="softdrinks" element={<SoftDrinks />} />
                    <Route path="vodka" index element={<Vodka />} />
                  </Route>
                  <Route exact path="foods" element={<Foods />}>
                    <Route index element={<Starters />}></Route>
                    <Route path="burgers" element={<Burgers />}></Route>
                    <Route path="classicmains" element={<Classicmains />}></Route>
                  </Route>
                  <Route exact  path="snacks" element={<Snacks />}>
                  <Route index element={<Crisps />}></Route>
                  </Route>
                </Route>
                  <Route path="checkout" element={<Checkout />}></Route>
            </Routes>
        </div>
    )
}

export default AllRouters