import investImg from "../assets/investment-calculator-logo.png";
import "../index.css";

export default function Header() {
  return (
    <div id="header">
      <img src={investImg} alt="logo of the money bag" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
