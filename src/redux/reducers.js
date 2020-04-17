import { combineReducers } from "redux";
import {
  SHOW_PRODUCT,
  CLOSE_PRODUCT,
  ADD_ITEM,
  DELETE_ITEM,
  SHOW_LIST,
  HIDE_LIST,
} from "./actions";
import { products as defaultProducts } from "../assets/data";

function remoceItem(product) {
  const quantity = product.quantity === 0 ? 0 : product.quantity - 1;
  return { ...product, quantity };
}

function product(state = null, action) {
  switch (action.type) {
    case SHOW_PRODUCT:
      return action.product;
    case CLOSE_PRODUCT:
      return null;
    case ADD_ITEM:
      return { ...state, quantity: state.quantity + 1 };
    case DELETE_ITEM:
      return remoceItem(state);
    case SHOW_LIST:
      return null;
    default:
      return state;
  }
}

function total(state = 0, action) {
  switch (action.type) {
    case ADD_ITEM:
      return state + action.product.value;
    case DELETE_ITEM:
      return action.product.quantity === 0
        ? state
        : state - action.product.value;
    default:
      return state;
  }
}

function products(state = defaultProducts, action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.map((item) => {
        if (item.id === action.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
    case DELETE_ITEM:
      return state.map((item) => {
        if (item.id === action.product.id) {
          return remoceItem(item);
        } else return item;
      });
    default:
      return state;
  }
}

function listCart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      if (action.product.quantity === 0) {
        action.product.quantity += 1;
        return [...state, { ...action.product }];
      } else {
        return state.map((item) => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      }
    case DELETE_ITEM:
      if (action.product.quantity === 1) {
        return state.filter((item) => item.id !== action.product.id);
      } else {
        return state.map((item) => {
          if (item.id === action.product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    default:
      return state;
  }
}

function showList(state = false, action) {
  switch (action.type) {
    case SHOW_LIST:
      return true;
    case HIDE_LIST:
      return false;
    case SHOW_PRODUCT:
      return false;
    default:
      return state;
  }
}

const marketPlace = combineReducers({
  product,
  total,
  products,
  showList,
  listCart,
});

export default marketPlace;
