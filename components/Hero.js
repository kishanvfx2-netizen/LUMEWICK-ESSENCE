export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "0 60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#C9A86A",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "24px",
              fontFamily: "Inter",
            }}
          >
            Crafted to Gift. Designed to Remember.
          </p>

          <h1
            style={{
              fontFamily: "Playfair Display",
              fontSize: "92px",
              lineHeight: "0.95",
              fontWeight: 500,
            }}
          >
            Candle
            <br />
            Bouquets
            <br />
            Reimagined
          </h1>

          <p
            style={{
              marginTop: "30px",
              fontSize: "20px",
              maxWidth: "520px",
              color: "#666",
              lineHeight: 1.7,
            }}
          >
            Luxury candle bouquets, curated gift boxes,
            and handcrafted collections designed for
            life's most meaningful moments.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            <button
              style={{
                background: "#1F1F1F",
                color: "#fff",
                border: "none",
                padding: "18px 34px",
                borderRadius: "999px",
              }}
            >
              Build Your Bouquet
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #1F1F1F",
                padding: "18px 34px",
                borderRadius: "999px",
              }}
            >
              Explore Collections
            </button>
          </div>
        </div>

        <div>
          <div
            style={{
              height: "700px",
              borderRadius: "36px",
              background:
                "linear-gradient(135deg,#f2e7d5,#d6c19a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              color: "#5c4630",
            }}
          >
            Hero Bouquet Image
          </div>
        </div>
      </div>
    </section>
  );
}
