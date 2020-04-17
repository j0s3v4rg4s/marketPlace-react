import React from "react";
import Header from "../Header/Header";
import Section from "../Section/Section";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetail/ProductDetail";

import "./Layaout.scss";
import { connect } from "react-redux";
import CheckOut from "../CheckOut/CheckOut";

class Layaout extends React.Component {
  showProduct = () => {
    return this.props.actualProduct ? <ProductDetails /> : null;
  };

  showCheckOut = () => (this.props.isShow ? <CheckOut /> : null);

  render() {
    const { actualProduct, isShow } = this.props;
    return (
      <div className="Layaout">
        <div className="Layaout__header">
          <Header />
        </div>

        <div className="Layaout__body">
          <Section title="Store">
            <Products />
          </Section>
          <Section
            title={actualProduct ? "Product" : isShow ? "Shoping Cart" : ""}
            className={"first-element"}
          >
            {this.showProduct()}
            {this.showCheckOut()}
          </Section>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  actualProduct: state.product,
  isShow: state.showList,
});

export default connect(mapState)(Layaout);
