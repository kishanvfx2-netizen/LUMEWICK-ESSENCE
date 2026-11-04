"use client";

import { useState } from "react";

export default function BouquetBuilder() {
  const [size, setSize] = useState("Signature");
  const [color, setColor] = useState("Pink");

  const sizes = [
    {
      name: "Petite",
      price: 59,
      description: "Elegant starter bouquet",
    },
    {
      name: "Signature",
      price: 89,
      description: "Most popular arrangement",
    },
    {
      name: "Grand",
      price: 129,
      description: "Luxury statement bouquet",
    },
  ];

  const colors = [
    {
      name: "Red",
      value: "#D12B2B",
    },
    {
      name: "Pink",
      value: "#F4B6C2",
    },
    {
      name: "White",
      value: "#FFFFFF",
    },
    {
      name: "Mixed",
      value:
        "linear-gradient(45deg,#ff6b6b,#ffd93d,#6bcB77)",
    },
  ];

  const selectedSize =
    sizes.find((s) => s.name === size);

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
            marginBottom: "10px",
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
              boxShadow:
                "0 10px 40px rgba(0,0,0,0.05)",
            }}
          >
            <h2>Choose Size</h2>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              {sizes.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    setSize(item.name)
                  }
                  style={{
                    border:
                      size === item.name
                        ? "2px solid #C9A86A"
                        : "1px solid #ddd",
                    borderRadius: "18px",
                    padding: "20px",
                    marginBottom: "12px",
                    cursor: "pointer",
                    background:
                      size === item.name
                        ? "#FFFDF8"
                        : "#fff",
                  }}
                >
                  <strong>{item.name}</strong>

                  <div
                    style={{
                      color: "#666",
                      marginTop: "8px",
                    }}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
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
              {colors.map((item) => (
                <div
                  key={item.name}
                  onClick={() =>
                    setColor(item.name)
                  }
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    border:
                      color === item.name
                        ? "3px solid black"
                        : "1px solid #ddd",
                    background:
                      item.value,
                  }}
                />
              ))}
            </div>

            <div
              style={{
                marginTop: "40px",
              }}
            >
              <h2>
                ${selectedSize.price}
              </h2>

              <button
                style={{
                  width: "100%",
                  marginTop: "20px",
                  background: "#1F1F1F",
                  color: "white",
                  border: "none",
                  borderRadius: "999px",
                  padding: "18px",
                  cursor: "pointer",
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
              minHeight: "850px",
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
                  color === "Red"
                    ? "#FFD8D8"
                    : color === "Pink"
                    ? "#FFEAF0"
                    : color === "White"
                    ? "#FFFFFF"
                    : "linear-gradient(45deg,#ff6b6b,#ffd93d,#6bcB77)",
                border: "1px solid #ddd",
              }}
            />

            <h2
              style={{
                marginTop: "30px",
              }}
            >
              {size} Bouquet
            </h2>

            <p
              style={{
                color: "#666",
                marginTop: "10px",
              }}
            >
              {color} Theme
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
