import "./header.css";
import heroImg from "../IMG/Hero-image.png";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-details">
        <h1>Little Lemon</h1>
        <h5>Guyana</h5>
        <p>
          We are a family own mediterranean resturant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button type="button" class="btn btn-warning reserveBTN">Reserve a table</button>
      </div>

      <div className="img-cap-container">
        <img src={heroImg} alt="man presenting a plate of food" className="img-cap"></img>
    </div>
    </header>
  );
};
export default Header;
