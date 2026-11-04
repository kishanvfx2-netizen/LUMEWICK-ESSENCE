export default function Stats() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "24px",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "56px" }}>
            100%
          </h2>

          <p>Handcrafted</p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "56px" }}>
            Premium
          </h2>

          <p>Gift Experience</p>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "56px" }}>
            Custom
          </h2>

          <p>Designed By You</p>
        </div>
      </div>
    </section>
  );
}
