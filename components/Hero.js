export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        <p className="uppercase tracking-[0.4em] text-sm mb-6 text-amber-700">
          Crafted to Gift. Designed to Remember.
        </p>

        <h1 className="text-6xl md:text-8xl font-light leading-tight">
          Candle Bouquets
          <br />
          Reimagined
        </h1>

        <p className="mt-8 text-lg max-w-2xl mx-auto text-neutral-600">
          Luxury candle bouquets, curated gift boxes, and handcrafted
          collections designed for life's most meaningful moments.
        </p>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full">
            Build Your Bouquet
          </button>

          <button className="border border-black px-8 py-4 rounded-full">
            Explore Gift Boxes
          </button>
        </div>
      </div>
    </section>
  );
}
