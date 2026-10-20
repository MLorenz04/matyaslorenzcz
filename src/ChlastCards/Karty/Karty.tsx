import { useState } from "react";
import ChlastCardsNavbar from "../Homepage/Components/Navbar/Navbar";
import ChlastCardsSidebar from "./Components/Sidebar/ChlastCardsSidebar";
import "./karty.css";
import { Edition } from "./Card";
export default function Karty() {
  const editions: Array<Edition> = [
    {
      name: "BET",
      length: 100,
    },
    {
      name: "FAI",
      length: 50,
    },
  ];
  const [currentEdition, setCurrentEdition] = useState(editions[0]);
  return (
    <section className="ChlastCards ChlastCards__karty">
      <ChlastCardsNavbar />
      <h2 className="ChlastCards__karty__heading"> Karty z edice {currentEdition.name} </h2>
      <div className="ChlastCards__karty__content">
        <ChlastCardsSidebar editions={editions} outsideEdition={currentEdition} outsideEditionSetter={setCurrentEdition} />
        <div className="ChlastCards__karty__edition">
          <div className="ChlastCards__karty__grid">
            {Array.from({ length: currentEdition.length }, (_, i) => (
              <img className="ChlastCards__karty__card" key={i + 1} src={`/Cards/${currentEdition.name}/${i + 1}.png`} alt={`Karta ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
