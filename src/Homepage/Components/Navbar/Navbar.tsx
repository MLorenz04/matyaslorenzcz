import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="--green">
      <a className="--green" href="/">
        {" "}
        Domů
      </a>
      <a className="--green" href="/basne">
        {" "}
        Básně{" "}
      </a>
      <a className="--green" href="/chlastCards">
        {" "}
        ChlastCards{" "}
      </a>
    </nav>
  );
}
