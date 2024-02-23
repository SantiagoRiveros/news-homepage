import { HeroBanner } from "../assets";

export default function Hero() {
  return (
    <div>
      <img src={HeroBanner} alt="hero-banner" />
      <div>
        <h2>The Bright Future of Web 3.0?</h2>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fullfilling its promise?
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}
