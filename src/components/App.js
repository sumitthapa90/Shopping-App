import React from "react";
import Cart from "./Cart";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { products } from "../data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSizes: [],
      cartItems: [],
    };
  }

  componentDidUpdate() {
    this.handleUpadeLocalStorage();
  }

  handleUpadeLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cartItems));
  };

  handleCartToItem = (p) => {
    let isPresent =
      this.state.cartItems.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      this.incrementQuantity(p.id);
    } else {
      this.setState((preveState) => ({
        cartItems: preveState.cartItems.concat({ ...p, quantity: 1 }),
      }));
    }
  };

  incrementQuantity = (id) => {
    this.setState((preveState) => {
      let updatedCartItem = preveState.cartItems.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity + 1 };
        }

        return p;
      });
      return {
        cartItems: updatedCartItem,
      };
    });
  };

  decrementQuantity = (id) => {
    this.setState((preveState) => {
      let updatedCartItem = preveState.cartItems.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 };
        }

        return p;
      });
      return {
        cartItems: updatedCartItem,
      };
    });
  };

  deleteQuantity = (id) => {
    this.setState((preveState) => {
      let updatedCartItem = preveState.cartItems.filter((p) => {
        return p.id !== id;
      });
      return {
        cartItems: updatedCartItem,
      };
    });
  };
  handleClick = (size) => {
    if (this.state.selectedSizes.includes(size)) {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSizes: prevState.selectedSizes.concat(size),
      }));
    }
  };

  render() {
    return (
      <div className="wrapper flex space-between">
        <Sidebar
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleClick={this.handleClick}
        />
        <Main
          products={products}
          selectedSizes={this.state.selectedSizes}
          handleCartToItem={this.handleCartToItem}
        />
        <Cart
         
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          deleteQuantity={this.deleteQuantity}
        />
      </div>
    );
  }
}

export default App;
