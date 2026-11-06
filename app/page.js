import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
        className="section"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <p
            style={{
              color: "#C9A86A",
              textTransform: "uppercase",
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            Featured Collections
          </p>

          <h2
            className="heading"
            style={{
              fontSize: "56px",
              marginBottom: "60px",
            }}
          >
            Designed For Every Occasion
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(320px,1fr))",
              gap: "24px",
            }}
          >
            <div
              className="card"
              style={{
                padding: "50px",
                background: "#FDF7F9",
              }}
            >
              <h3>Build Your Bouquet</h3>

              <p
                style={{
                  marginTop: "20px",
                  color: "#666",
                }}
              >
                Personalize every detail.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: "50px",
                background: "#F6F9F4",
              }}
            >
              <h3>Luxury Gift Boxes</h3>

              <p
                style={{
                  marginTop: "20px",
                  color: "#666",
                }}
              >
                Ready-to-gift collections.
              </p>
            </div>

            <div
              className="card"
              style={{
                padding: "50px",
                background: "#FFFBF2",
              }}
            >
              <h3>Signature Candles</h3>

              <p
                style={{
                  marginTop: "20px",
                  color: "#666",
                }}
              >
                Elegant fragrances for every home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
