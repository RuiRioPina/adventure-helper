import * as React from "react";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        padding: "1rem",
        position: "fixed",
        bottom: 0,
      }}
    >
      <p style={{ textAlign: "center", margin: 0 }}>© 2023 Adventure Helper</p>
    </footer>
  );
}

export default Footer;
