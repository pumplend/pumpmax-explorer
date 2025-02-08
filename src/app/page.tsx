import Blocks from "./components/blocks/blocks";
import Hero from "./components/ui/hero";
import Positons from "./components/blocks/positions";
import Actives from "./components/blocks/actives";
import GoingLiqudtion from "./components/blocks/going_liqudtion";
import Status from "./components/blocks/status";

export default function Home() {
  return (
    <div className="pt-14">
      <Hero />
      <Status />
      <Positons />
      <Actives />
      {/* <GoingLiqudtion /> */}
    </div>
  );
}
