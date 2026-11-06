export default function Footer() {
  return (
    <footer
      style={{
        background: "#1F1F1F",
        color: "#FFF",
        padding: "80px 40px",
        marginTop: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily:
                "Playfair Display, serif",
            }}
          >
            Lumewick Essence
          </h2>

          <p
            style={{
              color: "#BBB",
              lineHeight: "1.8",
            }}
          >
            Crafted to Gift.
            Designed to Remember.
          </p>
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
