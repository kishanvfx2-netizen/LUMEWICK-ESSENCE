export default function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
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
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "24px",
              fontSize: "14px",
            }}
          >
            Crafted to Gift. Designed to Remember.
          </p>

          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "90px",
              lineHeight: "0.95",
              marginBottom: "30px",
              fontWeight: "500",
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
              lineHeight: "1.8",
              color: "#666",
              maxWidth: "520px",
            }}
          >
            Luxury candle bouquets, curated gift boxes, and handcrafted
            collections designed for life's most meaningful moments.
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
                borderRadius: "999px",
                padding: "18px 36px",
                fontSize: "16px",
              }}
            >
              Build Your Bouquet
            </button>

            <button
              style={{
                background: "transparent",
                border: "1px solid #1F1F1F",
                borderRadius: "999px",
                padding: "18px 36px",
                fontSize: "16px",
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
              borderRadius: "40px",
              background:
                "linear-gradient(135deg, #f8f0e4, #d8bf94)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "#5A4A32",
              boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
            }}
          >
            Premium
