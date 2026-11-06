export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Image */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "blur(1px)",
        }}
      />

      {/* Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(248,246,242,.8), rgba(248,246,242,.95))",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Crafted To Gift. Designed To Remember.
        </p>

        <h1
          className="heading"
          style={{
            fontSize: "clamp(56px,8vw,110px)",
            lineHeight: "1",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          Luxury Candle Bouquets
        </h1>

        <h2
          className="heading"
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            color: "#666",
            fontWeight: "400",
            marginTop: "20px",
          }}
        >
          Designed For Meaningful Moments
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            color: "#666",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Personalized candle bouquets,
          handcrafted gift collections,
          and memorable experiences created
          for life's most important celebrations.
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

        <div
          style={{
            marginTop: "80px",
            color: "#999",
            fontSize: "14px",
          }}
        >
          Scroll To Explore
        </div>
      </div>
    </section>
  );
}
