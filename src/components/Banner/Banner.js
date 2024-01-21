import React from "react";

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      {action && (
        <button type="reset" onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
