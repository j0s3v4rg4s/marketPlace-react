import React from "react";
import "./products.scss";
import Product from "../Product/Product";
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <div className="Products">
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps)(Products);
