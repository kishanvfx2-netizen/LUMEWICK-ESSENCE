export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#C9A86A",
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Crafted to Gift. Designed to Remember.
          </p>

          <h1
            style={{
              fontSize: "80px",
              lineHeight: "0.95",
              marginBottom: "24px",
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
              fontSize: "20px",
              color: "#666",
              maxWidth: "500px",
              lineHeight: "1.8",
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
                color: "white",
                border: "none",
                padding: "18px 36px",
                borderRadius: "999px",
              }}
            >
              Build Your Bouquet
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #1F1F1F",
                padding: "18px 36px",
                borderRadius: "999px",
              }}
            >
              Explore Collections
            </button>
          </div>
        </div>

        <div
          style={{
            height: "700px",
            borderRadius: "40px",
            background:
              "linear-gradient(135deg,#f8f0e4,#d8bf94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
          }}
        >
          Premium Bouquet Preview
        </div>
      </div>
    </section>
  );
}
