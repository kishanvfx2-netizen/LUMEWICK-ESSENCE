export default function BouquetBuilder() {
  return (
    <main
      style={{
        background: "#F8F5EE",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "16px",
          }}
        >
          Design Your Bouquet
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "60px",
          }}
        >
          Personalize your candle bouquet in seconds.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "450px 1fr",
            gap: "40px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "32px",
              borderRadius: "24px",
            }}
          >
            <h3>Size</h3>

            <div style={{ marginTop: "16px" }}>
              ○ Petite
            </div>

            <div style={{ marginTop: "12px" }}>
              ○ Signature
            </div>

            <div style={{ marginTop: "12px" }}>
              ○ Grand
            </div>

            <hr
              style={{
                margin: "32px 0",
              }}
            />

            <h3>Color Theme</h3>

            <div style={{ marginTop: "16px" }}>
              ○ Red
            </div>

            <div style={{ marginTop: "12px" }}>
              ○ Pink
            </div>

            <div style={{ marginTop: "12px" }}>
              ○ White
            </div>

            <div style={{ marginTop: "12px" }}>
              ○ Mixed
            </div>

            <hr
              style={{
                margin: "32px 0",
              }}
            />

            <h3>Additions</h3>

            <div style={{ marginTop: "16px" }}>
              □ Greeting Card
            </div>

            <div style={{ marginTop: "12px" }}>
              □ Teddy Bear
            </div>

            <div style={{ marginTop: "12px" }}>
              □ Luxury Packaging
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              minHeight: "700px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Bouquet Preview Area
          </div>
        </div>
      </div>
    </main>
  );
}
