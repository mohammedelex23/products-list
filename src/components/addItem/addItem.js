import React, { Component } from "react";

class addItem extends Component {
  state = {
    product: "",
    price: "",
    qty: 1,
  };

  handleChange = (name) => (e) => {
    console.log(name);
    console.log(e.target.id + ": " + e.target.value);
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      product: "",
      price: "",
    });
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.product}
            placeholder="Enter Product"
            onChange={this.handleChange("product")}
            required
          />
          <input
            type="number"
            value={this.state.price}
            placeholder="Enter Price"
            onChange={this.handleChange("price")}
            required
          />
          <input
            type="number"
            value={this.state.qty}
            placeholder="Enter qty"
            onChange={this.handleChange("qty")}
            required
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default addItem;
