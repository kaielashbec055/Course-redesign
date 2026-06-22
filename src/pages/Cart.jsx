import { useNavigate, Link } from "react-router-dom";

function Cart({ cartItems, onRemove }) {
  const navigate = useNavigate();

  return (
    <div className="container-custom" style={{ padding: "40px 24px" }}>
      
      <button 
        onClick={() => navigate(-1)} 
        style={{ background: "#ffffff", border: "1px solid #cbd5e1", color: "#334155", padding: "8px 16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", marginBottom: "24px" }}
      >
        ← Continue Shopping
      </button>

      <h1 className="page-title" style={{ marginBottom: "24px" }}>Your Selected Cart Items</h1>

      {cartItems.length === 0 ? (
        <div style={{ background: "white", padding: "48px", borderRadius: "16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
          <h2 style={{ color: "#64748b", fontWeight: "600", marginBottom: "16px" }}>Your cart is currently empty!</h2>
          <p style={{ color: "#94a3b8", marginBottom: "24px" }}>Head back to our academic programs list to select a specialization.</p>
          <Link to="/" style={{ background: "#2563eb", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}>
            Browse Programs
          </Link>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {cartItems.map((item) => (
            /* ⚡ FIX: Use item.slug as the primary element mapping key identifier */
            <div 
              key={item.slug} 
              style={{ background: "white", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}
            >
              <div>
                <h3 style={{ color: "#1d4ed8", fontSize: "1.3rem", fontWeight: "700", margin: "0" }}>{item.title}</h3>
                <p style={{ color: "#64748b", margin: "4px 0 0 0", fontSize: "0.95rem" }}>
                  {item.category} Specialization | ⏳ {item.duration}
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <Link to={`/course/${item.slug}`} className="view-btn" style={{ fontSize: "0.9rem", padding: "8px 16px" }}>
                  View Details
                </Link>
                {/* ⚡ FIX: Pass the explicit string item.slug instead of duplicate numeric IDs */}
                <button 
                  onClick={() => onRemove(item.slug)}
                  style={{ background: "#fee2e2", color: "#b91c1c", border: "none", padding: "8px 16px", borderRadius: "8px", fontWeight: "600", cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Checkout Block */}
          <div style={{ marginTop: "24px", background: "white", padding: "24px", borderRadius: "16px", border: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "1.1rem", color: "#475569", fontWeight: "500" }}>Total Programs Selected:</span>
              <strong style={{ fontSize: "1.5rem", marginLeft: "8px", color: "#0f172a" }}>{cartItems.length} Course(s)</strong>
            </div>
            <button 
              onClick={() => alert("Proceeding to academic intake registration checkout pipeline... 🎉")}
              style={{ background: "#10b981", color: "white", border: "none", padding: "14px 28px", borderRadius: "10px", fontWeight: "700", fontSize: "1rem", cursor: "pointer" }}
            >
              Checkout Now
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Cart;
