export default function Footer() {
  return (
    <footer
      style={{
        background: "#1F1F1F",
        color: "white",
        padding: "80px 40px",
        marginTop: "120px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px"
        }}
      >
        <div>
          <h2>LUMEWICK ESSENCE</h2>
          <p>Crafted to Gift. Designed to Remember.</p>
        </div>

        <div>
          <h4>Shop</h4>
          <p>Build Bouquet</p>
          <p>Gift Boxes</p>
          <p>Candles</p>
        </div>

        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  );
}
