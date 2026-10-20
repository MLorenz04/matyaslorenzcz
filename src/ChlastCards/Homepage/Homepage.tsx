import "./homepage.css";
import "../ChlastCards.css";
import chlastCards from "./ChlastCards - BET.png";
import ChlastCardsNavbar from "./Components/Navbar/Navbar";
export default function ChlastCardsHomepage() {
  return (
    <div className="ChlastCards">
      <ChlastCardsNavbar />
      <section className="ChlastCards__headshot">
        <div className="ChlastCards__headshot__content">
          <h1> ChlastCards </h1>
          <h2> Hra pro opravdové fajnšmekry! </h2>
        </div>
        <img src={chlastCards} />
      </section>
    </div>
  );
}
