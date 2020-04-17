import React from "react";
import { connect } from "react-redux";

import { showList, hideList } from "../../redux/actions";
import "./Header.scss";
import Currency from "../Currency/Currency";

class Header extends React.Component {
  handleShowTotal = () => this.props.showList();
  handleHideTotal = () => this.props.hideList();

  showTotalButton = () =>
    !this.props.isShow ? (
      <button
        className="btn btn-primary Header__btn"
        onClick={this.handleShowTotal}
      >
        <span className="material-icons">shopping_cart</span>
        <Currency value={this.props.total} />
      </button>
    ) : (
      <div className="Header__content">
        <div className="Header__preview">
          <span className="material-icons">shopping_cart</span>
          <Currency value={this.props.total} />
        </div>
        <button
          className="btn btn-primary Header__close"
          onClick={this.handleHideTotal}
        >
          X
        </button>
      </div>
    );

  render() {
    return (
      <div className="Header">
        <div className="Header__logo">
          <span className="material-icons Header__logo-icon">storefront</span>
        </div>
        {this.showTotalButton()}
      </div>
    );
  }
}

const mapState = (state) => ({ total: state.total, isShow: state.showList });
const mapDispatch = { showList, hideList };

export default connect(mapState, mapDispatch)(Header);
