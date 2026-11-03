import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main
      style={{
        background: "#F8F5EE",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />
    </main>
  );
}
