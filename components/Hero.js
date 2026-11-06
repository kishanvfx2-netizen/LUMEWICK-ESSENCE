export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg,#DDB7C4,#F8F6F2,#A8B8A1)",
          opacity: 0.25
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "#DDB7C4",
          filter: "blur(120px)",
          opacity: 0.15,
          left: "-200px",
          top: "100px"
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "#A8B8A1",
          filter: "blur(120px)",
          opacity: 0.15,
          right: "-150px",
          bottom: "-150px"
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px"
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            textTransform: "uppercase",
            letterSpacing: "4px",
            marginBottom: "20px"
          }}
        >
          Crafted To Gift. Designed To Remember.
        </p>

        <h1
          className="heading"
          style={{
            fontSize: "clamp(52px,6vw,90px)",
            lineHeight: "1.05",
            marginBottom: "20px"
          }}
        >
          Luxury Candle Bouquets
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#666",
            marginBottom: "40px"
          }}
        >
          Personalized gifts handcrafted for life's
          most meaningful celebrations.
        </p>

        <button
          style={{
            background: "#C9A86A",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            padding: "18px 36px",
            fontSize: "16px"
          }}
        >
          Build Your Bouquet
        </button>

        <div
          style={{
            marginTop: "80px",
            color: "#999"
          }}
        >
          Scroll To Explore ↓
        </div>
      </div>
    </section>
  );
}
