import React from "react";

const Currency = (props) => {
  const formater = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  const value = formater.format(props.value);
  return <span className={props.className}>{value}</span>;
};

export default Currency;
