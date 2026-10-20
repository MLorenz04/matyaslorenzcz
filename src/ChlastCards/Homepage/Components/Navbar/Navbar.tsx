import "./navbar.css";

export default function ChlastCardsNavbar() {
  return (
    <nav className="--white">
      <a className="--white" href="/">
        {" "}
        Domů
      </a>
      <a className="--white" href="/chlastCards/karty">
        {" "}
        Karty{" "}
      </a>
      <a className="--white" href="/chlastCards/Pravidla.pdf">
        {" "}
        Pravidla{" "}
      </a>
    </nav>
  );
}
