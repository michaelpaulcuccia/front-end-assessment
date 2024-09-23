import "./header.css";
import zicasso_logo from "../../assets/zicasso_logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header-image" src={zicasso_logo} alt="" />
    </header>
  );
};

export default Header;
