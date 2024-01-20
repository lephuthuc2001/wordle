import React from "react";

function Key({ children, status }) {
  const keyClassName = `keyboard__key ${status}`;
  return <button className={keyClassName}>{children}</button>;
}

export default Key;
