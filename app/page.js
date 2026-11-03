import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import WhyUs from "../components/WhyUs";
import GiftExperience from "../components/GiftExperience";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <GiftExperience />
      <WhyUs />
      <Footer />
    </>
  );
}
