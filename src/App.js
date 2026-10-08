import logo from "./logo.svg";
import "./App.css";
import Homepage from "./ChlastCards/Homepage/Homepage";

function App() {
  return (
    <body>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Carlito:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&family=Viaoda+Libre&display=swap"
          rel="stylesheet"
        />
      </head>
      <Homepage />
    </body>
  );
}

export default App;
