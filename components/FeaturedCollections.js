export default function FeaturedCollections() {
  const cards = [
    "Build Your Bouquet",
    "Luxury Gift Boxes",
    "Signature Candles"
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "0 24px"
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          marginBottom: "60px"
        }}
      >
        Curated Collections
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "24px"
        }}
      >
        {cards.map((card) => (
          <div
            key={card}
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "40px",
              minHeight: "300px",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.05)"
            }}
          >
            <h3>{card}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
