import QRGenerator from "./component/QRGenerator";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>QR CODE GENERATOR</h1>
      <QRGenerator text="This is the year 2022" />
    </div>
  );
}

export default App;
