import React from "react";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux/createStore";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>

        {/* <Route path="/products/:productID" render={() => ( */}

        {/* )} /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
