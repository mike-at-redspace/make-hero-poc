import "../styles/index.css";
import { HeroCarousel } from "../components/HeroCarousel";
import { CAROUSEL_DATA } from "../imports/carousel-data";

export default function App() {
  return <HeroCarousel items={CAROUSEL_DATA} />;
}
