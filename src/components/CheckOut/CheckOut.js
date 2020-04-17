import React from "react";
import { connect } from "react-redux";
import Currency from "../Currency/Currency";
import "./CheckOut.scss";

class CheckOut extends React.Component {
  componentDidMount() {
    const s = document.createElement("script");
    s.src = "https://checkout.wompi.co/widget.js";
    s.setAttribute("data-render", "button");
    s.setAttribute(
      "data-public-key",
      "pub_test_Q5yDA9xoKdePzhSGeVe9HAez7HgGORGf"
    );
    s.setAttribute("data-currency", "COP");
    s.setAttribute("data-amount-in-cents", this.props.total + "00");
    s.setAttribute("data-reference", "4XMPGKWWPKWQ");

    const parent = document.getElementById("checkout-btn");
    parent.appendChild(s);
  }

  render() {
    const { total, listCart } = this.props;
    return (
      <div>
        {listCart.map((item) => {
          return (
            <div key={item.id} className="CheckOut__list">
              <div className="CheckOut__list-count">{item.quantity}</div>
              <img src={item.img} alt="" />
            </div>
          );
        })}

        <div className="CheckOut__total">
          <span className="text">Total: </span>
          <Currency value={total} className="value" />
        </div>

        <form id="checkout-btn"></form>
      </div>
    );
  }
}

const mapState = (state) => ({ total: state.total, listCart: state.listCart });

export default connect(mapState)(CheckOut);
