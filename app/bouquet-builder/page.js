"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BouquetBuilder() {
  const [size, setSize] = useState("Signature");
  const [color, setColor] = useState("Pink");

  const [extras, setExtras] = useState({
    card: false,
    teddy: false,
    luxury: false,
  });

  const sizes = {
    Petite: 59,
    Signature: 89,
    Grand: 129,
  };

  const total =
    sizes[size] +
    (extras.card ? 3 : 0) +
    (extras.teddy ? 15 : 0) +
    (extras.luxury ? 10 : 0);

  const toggleExtra = (key) => {
    setExtras({
      ...extras,
      [key]: !extras[key],
    });
  };

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#F3EFE8",
          minHeight: "100vh",
          padding: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#888",
                marginBottom: "12px",
              }}
            >
              Home / Build Bouquet
            </div>

            <h1
              style={{
                fontSize: "42px",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#1F1F1F",
              }}
            >
              Build Your Bouquet
            </h1>

            <p
              style={{
                color: "#666",
                fontSize: "16px",
              }}
            >
              Personalize your arrangement in seconds.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "420px 1fr",
              gap: "30px",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px",
                padding: "30px",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.06)",
                height: "fit-content",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Bouquet Size
              </h3>

              {Object.keys(sizes).map((item) => (
                <div
                  key={item}
                  onClick={() => setSize(item)}
                  style={{
                    cursor: "pointer",
                    padding: "18px",
                    marginBottom: "12px",
                    borderRadius: "18px",
                    border:
                      size === item
                        ? "2px solid #C5A15A"
                        : "1px solid #E4E4E4",
                    background:
                      size === item
                        ? "#FFF8EA"
                        : "#FFF",
                    transition: "all .2s ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {item}
                  </div>

                  <div
                    style={{
                      color: "#666",
                      marginTop: "6px",
                    }}
                  >
                    ${sizes[item]}
                  </div>
                </div>
              ))}

              <hr
                style={{
                  margin: "30px 0",
                  border: "none",
                  borderTop: "1px solid #EEE",
                }}
              />

              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Color Theme
              </h3>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                }}
              >
                {[
                  ["Red", "#D62828"],
                  ["Pink", "#E8AAB8"],
                  ["White", "#FFFFFF"],
                  ["Mixed", "#D4AF37"],
                ].map(([name, value]) => (
                  <div
                    key={name}
                    onClick={() => setColor(name)}
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "50%",
                      background: value,
                      cursor: "pointer",
                      border:
                        color === name
                          ? "3px solid #111"
                          : "1px solid #DDD",
                    }}
                  />
                ))}
              </div>

              <hr
                style={{
                  margin: "30px 0",
                  border: "none",
                  borderTop: "1px solid #EEE",
                }}
              />

              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "20px",
                }}
              >
                Extras
              </h3>

              {[
                ["card", "Greeting Card", 3],
                ["teddy", "Teddy Bear", 15],
                ["luxury", "Luxury Packaging", 10],
              ].map(([key, label, price]) => (
                <div
                  key={key}
                  onClick={() => toggleExtra(key)}
                  style={{
                    cursor: "pointer",
                    padding: "18px",
                    marginBottom: "12px",
                    borderRadius: "18px",
                    border: extras[key]
                      ? "2px solid #C5A15A"
                      : "1px solid #E4E4E4",
                    background: extras[key]
                      ? "#FFF8EA"
                      : "#FFF",
                    display: "flex",
                    justifyContent:
                      "space-between",
                  }}
                >
                  <span>{label}</span>

                  <span>+${price}</span>
                </div>
              ))}

              <div
                style={{
                  marginTop: "30px",
                  paddingTop: "30px",
                  borderTop: "1px solid #EEE",
                }}
              >
                <div
                  style={{
                    color: "#777",
                    fontSize: "14px",
                  }}
                >
                  Total
                </div>

                <div
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    marginTop: "8px",
                  }}
                >
                  ${total}
                </div>

                <button
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    padding: "18px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#1F1F1F",
                    color: "#FFF",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div
              style={{
                background: "#EAE2D6",
                borderRadius: "30px",
                minHeight: "850px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  background: "#FFF",
                  borderRadius: "30px",
                  padding: "40px",
                  boxShadow               "0 20px 60px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    background:
                      color === "Red"
                        ? "#FAD3D3"
                        : color === "Pink"
                        ? "#F8DFE6"
                        : color === "White"
                        ? "#F5F5F5"
                        : "linear-gradient(135deg,#FAD961,#F76B1C)",
                  }}
                />

                <h2
                  style={{
                    textAlign: "center",
                    marginTop: "30px",
                  }}
                >
                  {size} Bouquet
                </h2>

                <p
                  style={{
                    textAlign: "center",
                    color: "#777",
                    marginTop: "10px",
                  }}
                >
                  {color} Theme
                </p>

                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  {extras.card && (
                    <p>✓ Greeting Card</p>
                  )}

                  {extras.teddy && (
                    <p>✓ Teddy Bear</p>
                  )}

                  {extras.luxury && (
                    <p>✓ Luxury Packaging</p>
                  )}
                </div>

                <div
                  style={{
                    marginTop: "30px",
                    paddingTop: "20px",
                    borderTop: "1px solid #EEE",
                    fontSize: "24px",
                    fontWeight: "600",
                  }}
                >
                  ${total}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
