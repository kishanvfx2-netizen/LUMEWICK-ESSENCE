export default function BouquetBuilder() {
  return (
    <main
      style={{
        background: "#F8F5EE",
        minHeight: "100vh",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            marginBottom: "12px",
          }}
        >
          Design Your Bouquet
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "50px",
          }}
        >
          Create a personalized gifting experience.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "30px",
              position: "sticky",
              top: "100px",
              height: "fit-content",
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2>Size</h2>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div
                style={{
                  border: "2px solid #C9A86A",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                Petite
              </div>

              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                Signature
              </div>

              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "16px",
                  padding: "18px",
                }}
              >
                Grand
              </div>
            </div>

            <hr
              style={{
                margin: "30px 0",
              }}
            />

            <h2>Color Theme</h2>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#D12B2B",
                }}
              />

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#F4B6C2",
                }}
              />

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#FFFFFF",
                  border: "1px solid #ddd",
                }}
              />

              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(45deg,#ff6b6b,#ffd93d,#6bcB77)",
                }}
              />
            </div>

            <hr
              style={{
                margin: "30px 0",
              }}
            />

            <h2>Extras</h2>

            <div style={{ marginTop: "20px" }}>
              □ Greeting Card
            </div>

            <div style={{ marginTop: "15px" }}>
              □ Teddy Bear
            </div>

            <div style={{ marginTop: "15px" }}>
              □ Luxury Packaging
            </div>

            <div
              style={{
                marginTop: "50px",
                borderTop: "1px solid #eee",
                paddingTop: "30px",
              }}
            >
              <div
                style={{
                  color: "#666",
                }}
              >
                Starting At
              </div>

              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "600",
                  marginTop: "10px",
                }}
              >
                $89
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  background: "#1F1F1F",
                  color: "white",
                  border: "none",
                  borderRadius: "999px",
                  padding: "18px",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#FCFAF5",
              borderRadius: "30px",
              minHeight: "900px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#f6d3d3,#fff4f4)",
                marginBottom: "30px",
              }}
            />

            <h2
              style={{
                fontSize: "42px",
              }}
            >
              Live Preview
            </h2>

            <p
              style={{
                color: "#666",
                marginTop: "12px",
              }}
            >
              Bouquet preview updates here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
