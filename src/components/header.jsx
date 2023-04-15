import "./index.css";
import logo from "../images/logo.png"

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="logo" style={{marginLeft: "10%"}}>
          <img src={logo} alt="img" style={{ width: 158, height: 38, cursor: "pointer"}} onClick={() => window.location.replace("/#top")}/>
        </div>
        <div className="headerMenu" style={{marginRight: "10%"}}>
          <button className="headerButtons" onClick={() => window.location.replace("/#main")}>Главная</button>
          <button className="headerButtons" onClick={() => window.location.replace("/#about")}>О нас</button>
          <button className="headerButtons" onClick={() => window.location.replace("/#education")}>Обучение</button>
          <button className="headerButtonContactUs" onClick={() => window.location.replace("/#contacts")}>CONTACT US</button>
        </div>
      </div>
    </header>
  );
};