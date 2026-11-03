export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        background: "rgba(248,245,238,0.9)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "600",
              letterSpacing: "3px",
            }}
          >
            LUMEWICK
          </div>

          <div
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              color: "#777",
            }}
          >
            ESSENCE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
        <a href="/bouquet-builder">
  Build Bouquet
</a>

          <a href="#" style={{ color: "#444" }}>
            Gift Boxes
          </a>

          <a href="#" style={{ color: "#444" }}>
            Candles
          </a>

          <a href="#" style={{ color: "#444" }}>
            Candle Club
          </a>

          <button
            style={{
              background: "#1F1F1F",
              color: "white",
              border: "none",
              padding: "14px 24px",
              borderRadius: "999px",
              fontWeight: "500",
            }}
          >
            Start Designing
          </button>
        </div>
      </div>
    </nav>
  );
}
