export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center">
      <div className="text-xl font-semibold tracking-wider">
        LUMEWICK ESSENCE
      </div>

      <div className="hidden md:flex gap-8 text-sm uppercase">
        <a href="#">Build Bouquet</a>
        <a href="#">Gift Boxes</a>
        <a href="#">Candles</a>
        <a href="#">Candle Club</a>
      </div>
    </nav>
  );
}
