import React from "react";
import Currency from "../Currency/Currency";
import "./ProductDetail.scss";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/actions";

class ProductDetails extends React.Component {
  handleAdd = () => this.props.addItem(this.props.actualProduct);
  handleRemove = () => this.props.removeItem(this.props.actualProduct);

  render() {
    const { actualProduct } = this.props;
    return (
      <div className="ProductDetail">
        <span className="ProductDetail__count">{actualProduct.quantity}</span>
        <img className="ProductDetail__img" src={actualProduct.img} alt="" />
        <div className="ProductDetail__option">
          <p>{actualProduct.name}</p>
          <span className="ProductDetail__dot"></span>
          <Currency
            value={actualProduct.value}
            className="ProductDetail__space"
          />
          <button
            className="btn btn-second ProductDetail__btn"
            onClick={this.handleRemove}
          >
            -
          </button>
          <button
            className="btn btn-primary ProductDetail__btn"
            onClick={this.handleAdd}
          >
            +
          </button>
        </div>
        <div className="ProductDetail__description">
          <p className="ProductDetail__description-text">
            {actualProduct.description}
          </p>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({ actualProduct: state.product });
const mapDispatch = { addItem, removeItem };

export default connect(mapState, mapDispatch)(ProductDetails);
