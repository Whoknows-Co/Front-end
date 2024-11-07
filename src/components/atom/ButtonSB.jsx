import React from "react";

function ButtonSB({ txt, imgUrl }) {
  const styles = {
    backgroundColor: "#F4F2EA",
    width: "280px",
    height: "62px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    border: "none",
    borderRadius: "24px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    paddingRight: "14px",
    fontSize: "16px",
    fontWeight: "bold",
    gap: "10px",
    color: "#023047",
  };
  return (
    <button style={styles}>
      <img src={imgUrl} alt="" />
      {txt}
    </button>
  );
}

export default ButtonSB;
