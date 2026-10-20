import { Edition } from "../../Card";
import "./ChlastCardsSidebar.css";

export default function ChlastCardsSidebar({
  editions,
  outsideEdition,
  outsideEditionSetter,
}: {
  editions: Array<Edition>;
  outsideEdition: Edition;
  outsideEditionSetter: React.Dispatch<React.SetStateAction<Edition>>;
}) {
  return (
    <section className="ChlastCards__karty__sidebar" id="sidebar">
      <h2 className="ChlastCards__karty__sidebar__header"> Edice </h2>
      {editions.map((edition) => (
        <p className={`ChlastCards__karty__sidebar__link ${outsideEdition.name === edition.name ? "ChlastCards__karty__sidebar__link__selected" : ""}`} onClick={() => outsideEditionSetter(edition)}>
          {edition.name}
        </p>
      ))}
    </section>
  );
}
