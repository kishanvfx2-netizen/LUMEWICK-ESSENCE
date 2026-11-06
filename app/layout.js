export const metadata = {
  title: "Lumewick Essence",
  description: "Luxury Candle Bouquets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          background: "#F6F3EE",
          fontFamily: "Inter, sans-serif",
          color: "#1F1F1F",
        }}
      >
        {children}
      </body>
    </html>
  );
}
