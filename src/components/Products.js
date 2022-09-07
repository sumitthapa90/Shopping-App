import React from "react";
import OrderBy from "./OrderBy";
import Product from "./Product";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrder: "",
    };
  }

  handleOrderBy = (event) => {
    this.setState({
      selectedOrder: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="product-filter">
            <p>
              {this.props.data.products.length} Products
              {this.props.data.products.length > 1}found
            </p>
            <OrderBy
              selectedOrder={this.state.selectedOrder}
              handleOrderBy={this.handleOrderBy}
            />
          </div>

          <div>
            {this.props.data.products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
