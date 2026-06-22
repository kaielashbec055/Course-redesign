import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <nav className="main-navbar">
      <div className="navbar-container">

        <h1 className="navbar-logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>MBAAR</Link>
        </h1>

        <div className="navbar-links" style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">Home</Link>
          
          {/* 🛒 REPLACED PROGRAMS WITH DYNAMIC CART BUTTON */}
          <Link to="/cart" style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "600", color: cartCount > 0 ? "#2563eb" : "#475569" }}>
            Cart 
            <span style={{
              background: cartCount > 0 ? "#2563eb" : "#cbd5e1",
              color: "white",
              fontSize: "12px",
              padding: "2px 8px",
              borderRadius: "10px",
              marginLeft: "4px"
            }}>
              {cartCount}
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
