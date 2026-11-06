export default function Hero() {
  return (
    <section
      className="section"
      style={{
        paddingTop: "80px",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#C9A86A",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Crafted To Gift. Designed To Remember.
        </p>

        <h1
          className="heading"
          style={{
            fontSize: "72px",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.1",
          }}
        >
          Luxury Candle Bouquets For Every Occasion
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "30px auto",
            color: "#666",
            fontSize: "20px",
            lineHeight: "1.8",
          }}
        >
          Personalized candle bouquets, premium gift boxes,
          and handcrafted collections designed to create
          unforgettable gifting experiences.
        </p>

        <button
          style={{
            background: "#C9A86A",
            color: "white",
            border: "none",
            padding: "18px 34px",
            borderRadius: "999px",
            fontSize: "16px",
          }}
        >
          Build Your Bouquet
        </button>
      </div>
    </section>
  );
}
