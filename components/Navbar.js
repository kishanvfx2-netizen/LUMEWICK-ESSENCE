export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(248,246,242,.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,.05)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "90px",
          padding: "0 40px"
        }}
      >
        <div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: "600",
              letterSpacing: "2px"
            }}
          >
            LUMEWICK
          </div>

          <div
            style={{
              fontSize: "11px",
              letterSpacing: "6px",
              color: "#888"
            }}
          >
            ESSENCE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px"
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
              borderRadius: "999px",
              padding: "14px 28px"
            }}
          >
            Start Designing
          </button>
        </div>
      </div>
    </nav>
  );
}
