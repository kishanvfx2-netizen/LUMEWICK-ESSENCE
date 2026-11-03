export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8f5ee",
        fontFamily: "Arial"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem" }}>
          Lumewick Essence
        </h1>

        <p style={{ fontSize: "1.2rem" }}>
          Crafted to Gift. Designed to Remember.
        </p>

        <button
          style={{
            padding: "12px 24px",
            marginTop: "20px",
            borderRadius: "999px",
            border: "none",
            background: "#000",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Build Your Bouquet
        </button>
      </div>
    </main>
  );
}
