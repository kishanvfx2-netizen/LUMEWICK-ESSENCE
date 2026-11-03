export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}
      >
        <div>
          <p
            style={{
              letterSpacing: "4px",
              color: "#C9A86A",
              marginBottom: "20px",
              textTransform: "uppercase"
            }}
          >
            Crafted to Gift. Designed to Remember.
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: 300,
              lineHeight: 1.1
            }}
          >
            Candle Bouquets
            <br />
            Reimagined
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "20px",
              color: "#666",
              maxWidth: "500px"
            }}
          >
            Luxury candle bouquets and curated gift collections
            designed for life's most meaningful moments.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "40px"
            }}
          >
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "16px 32px"
              }}
            >
              Build Your Bouquet
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #111",
                borderRadius: "999px",
                padding: "16px 32px"
              }}
            >
              Explore Gift Boxes
            </button>
          </div>
        </div>

        <div
          style={{
            height: "600px",
            borderRadius: "32px",
            background:
              "linear-gradient(135deg,#f2e7d5,#d6c19a)"
          }}
        />
      </div>
    </section>
  );
}
