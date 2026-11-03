export default function WhyUs() {
  const items = [
    {
      title: "Handcrafted",
      text: "Every bouquet is carefully made by hand."
    },
    {
      title: "Personalized",
      text: "Designed around your occasion and style."
    },
    {
      title: "Premium Gifting",
      text: "Luxury presentation from start to finish."
    }
  ];

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "0 24px",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          marginBottom: "60px",
        }}
      >
        Why Lumewick
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "24px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            }}
          >
            <h3 style={{ marginBottom: "16px" }}>
              {item.title}
            </h3>

            <p style={{ color: "#666" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
