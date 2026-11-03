import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <WhyUs />
      <Footer />
    </>
  );
}
