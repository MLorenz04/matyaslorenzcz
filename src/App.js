import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChlastCardsHomepage from "./ChlastCards/Homepage/Homepage";
import Karty from "./ChlastCards/Karty/Karty";

function App() {
  return (
    <body>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
        <Routes>
          <Route path="/ChlastCards" element={<ChlastCardsHomepage />}></Route>
          <Route path="/ChlastCards/karty" element={<Karty />}></Route>
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
