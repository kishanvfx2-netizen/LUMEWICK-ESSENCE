export default function Navbar() {
  return (
    <nav
      style={{
        padding: "28px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div
        style={{
          fontSize: "20px",
          letterSpacing: "2px",
          fontWeight: 600
        }}
      >
        LUMEWICK ESSENCE
      </div>

      <div
        style={{
          display: "flex",
          gap: "40px"
        }}
      >
        <a href="#">Build Bouquet</a>
        <a href="#">Gift Boxes</a>
        <a href="#">Candles</a>
        <a href="#">Candle Club</a>
      </div>
    </nav>
  );
}
