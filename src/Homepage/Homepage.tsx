import "./homepage.css";
import headshot from "./Images/headshot2.png";
import leftFancy from "./Images/LeftNameFancy.png";
import rightFancy from "./Images/RightNameFancy.png";
import Navbar from "./Components/Navbar/Navbar";
export default function Homepage() {
  return (
    <div className="homepage">
      <section className="headshot">
        <Navbar />
        <h1 className="headshot__header">
          {" "}
          <img className="headshot__fancy headshot__fancy__left" src={leftFancy} alt="headshot" /> <span className="--green">Matyáš Lorenz </span>
          <img className="headshot__fancy headshot__fancy__right" src={rightFancy} alt="headshot" />
        </h1>
        <h2 className="headshot__title">Programátor a básník</h2>
        <img className="headshot__img" src={headshot} alt="headshot" />
      </section>
      <div className="divider"></div>
      <section className="ChlastCards"></section>
    </div>
  );
}
