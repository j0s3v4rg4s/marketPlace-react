import React from "react";
import { connect } from "react-redux";
import { showProduct } from "../../redux/actions";

import "./Product.scss";

class Product extends React.Component {
  handleclick = () => {
    this.props.showProduct(this.props.product);
  };

  isSelect = () => {
    return this.props.actualProduct?.id === this.props.product.id
      ? "active"
      : "";
  };

  showCount = () =>
    this.props.product.quantity > 0 ? (
      <span className="Product__count">{this.props.product.quantity}</span>
    ) : null;

  render() {
    return (
      <div className={`Product ` + this.isSelect()} onClick={this.handleclick}>
        {this.showCount()}
        <img className="Product__img" src={this.props.product.img} alt="" />
      </div>
    );
  }
}

const mapState = (state) => ({ actualProduct: state.product });
const mapDispatch = { showProduct };

export default connect(mapState, mapDispatch)(Product);
