export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "rgba(248,246,242,.95)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "32px",
              letterSpacing: "3px",
              fontWeight: "600",
            }}
          >
            LUMEWICK
          </div>

          <div
            style={{
              fontSize: "12px",
              letterSpacing: "6px",
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
            gap: "40px",
            fontSize: "15px",
          }}
        >
          <a href="/bouquet-builder">Build Bouquet</a>

          <a href="#">Gift Boxes</a>

          <a href="#">Candles</a>

          <a href="#">Candle Club</a>

          <button
            style={{
              background: "#C9A86A",
              color: "#fff",
              border: "none",
              padding: "14px 26px",
              borderRadius: "999px",
            }}
          >
            Start Designing
          </button>
        </div>
      </div>
    </nav>
  );
}
