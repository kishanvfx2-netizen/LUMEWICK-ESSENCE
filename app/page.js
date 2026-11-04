import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import GiftExperience from "../components/GiftExperience";
import WhyUs from "../components/WhyUs";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedCollections />
      <GiftExperience />
      <WhyUs />
      <Footer />
    </>
  );
}
