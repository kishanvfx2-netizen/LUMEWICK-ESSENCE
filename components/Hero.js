export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,#DDB7C4 0%, #F8F6F2 50%, #A8B8A1 100%)",
          opacity: 0.35,
        }}
      />

      {/* Hero Image Placeholder */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.25,
        }}
      >
        <div
          style={{
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#ffffff,#DDB7C4)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Content */}

      <div
        style={{
          position: "absolute",
          bottom: "120px",
          left: "8%",
          maxWidth: "700px",
        }}
      >
        <div
          style={{
            color: "#C9A86A",
            textTransform: "uppercase",
            letterSpacing: "5px",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          Crafted To Gift. Designed To Remember.
        </div>

        <h1
          className="heading"
          style={{
            fontSize: "clamp(48px,6vw,92px)",
            lineHeight: "1",
            marginBottom: "20px",
          }}
        >
          Luxury
          <br />
          Candle Bouquets
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "550px",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Personalized candle bouquets and
          handcrafted gift collections created for
          life's most meaningful celebrations.
        </p>

        <button
          style={{
            background: "#C9A86A",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "18px 36px",
            fontSize: "16px",
          }}
        >
          Build Your Bouquet
        </button>
      </div>

      {/* Scroll Indicator */}

      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#777",
          fontSize: "14px",
          letterSpacing: "2px",
        }}
      >
        SCROLL ↓
      </div>
    </section>
  );
}
