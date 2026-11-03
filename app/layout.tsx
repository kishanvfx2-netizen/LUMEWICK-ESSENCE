export const metadata = {
  title: "Lumewick Essence",
  description: "Luxury Candle Bouquets"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
