/**
 * Action types
 */

export const SHOW_PRODUCT = "SHOW_PRODUCT";
export const CLOSE_PRODUCT = "CLOSE_PRODUCT";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SHOW_LIST = "SHOW_LIST";
export const HIDE_LIST = "HIDE_LIST";

/*
 * Action creators
 */

export function showProduct(product) {
  return { type: SHOW_PRODUCT, product };
}

export function closeProduct() {
  return { type: CLOSE_PRODUCT };
}

export function addItem(product) {
  return { type: ADD_ITEM, product };
}

export function removeItem(product) {
  return { type: DELETE_ITEM, product };
}

export function showList() {
  return { type: SHOW_LIST };
}

export function hideList() {
  return { type: HIDE_LIST };
}
