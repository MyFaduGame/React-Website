import React from "react";
import { Navbar, Text } from "rsuite";
import { Store } from "lucide-react";

const Header = () => (
  <Navbar
    appearance="subtle"
    style={{
      position: "sticky",
      top: 0,
      width: "100%",
      zIndex: 20,
      padding: "10px 0",
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.45)",
    }}
  >
    <Navbar.Brand style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <Store size={24} /> <b style={{ fontSize: 18 }}>COMPANY</b>
    </Navbar.Brand>
  </Navbar>
);

export default Header;
