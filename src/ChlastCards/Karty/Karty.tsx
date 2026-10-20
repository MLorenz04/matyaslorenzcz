import ChlastCardsNavbar from "../Homepage/Components/Navbar/Navbar";
import "./karty.css";
export default function Karty() {
  return (
    <section className="ChlastCards__karty">
      <ChlastCardsNavbar />

      <div className="ChlastCards__karty__grid">
        {Array.from({ length: 100 }, (_, i) => (
          <img className="ChlastCards__karty__card" key={i + 1} src={`/Cards/BET/${i + 1}.png`} alt={`Karta ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
