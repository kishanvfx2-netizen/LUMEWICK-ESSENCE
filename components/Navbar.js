export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
        background: "rgba(246,243,238,0.95)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "3px",
              fontWeight: "600",
            }}
          >
            LUMEWICK
          </div>

          <div
            style={{
              fontSize: "11px",
              letterSpacing: "5px",
              color: "#777",
            }}
          >
            ESSENCE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            fontSize: "14px",
          }}
        >
          <a href="/bouquet-builder">
            Build Bouquet
          </a>

          <a href="#">
            Gift Boxes
          </a>

          <a href="#">
            Candles
          </a>

          <a href="#">
            Candle Club
          </a>

          <button
            style={{
              background: "#1F1F1F",
              color: "#FFF",
              border: "none",
              borderRadius: "999px",
              padding: "14px 24px",
              cursor: "pointer",
            }}
          >
            Start Designing
          </button>
        </div>
      </div>
    </nav>
  );
}
