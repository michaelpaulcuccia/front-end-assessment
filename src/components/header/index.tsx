import "./header.css";
import ResetButton from "../resetButton";
import zicasso_logo from "../../assets/zicasso_logo.png";

const Header = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <header className="header">
      <img className="header-image" src={zicasso_logo} alt="" />
      <ResetButton onClick={handleClick} />
    </header>
  );
};

export default Header;
