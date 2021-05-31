import spotifuLogo from "../../assets/icons/spotifu-logo.svg";
import "./styles.css";

export const Sidebar = () => (
  <aside className="sidebar">
    <img className="sidebar__logo" src={spotifuLogo} alt="logo spotifu" />

    <div className="sidebar__routes">
      <a className="active" href="#">
        <span className="icon icon--home" aria-label="Home Icon"></span> Home
      </a>

      <a href="#">
        <span className="icon icon--search" aria-label="Search Icon"></span>{" "}
        Buscar
      </a>

      <a href="#">
        <span
          className="icon icon--credit-card"
          aria-label="Credit Card Icon"
        ></span>{" "}
        Premium
      </a>
    </div>

    <ul className="sidebar__list">
      <li className="sidebar__list__title">Tu Biblioteca</li>
      <li className="sidebar__list__item">
        <a href="#">Creada para ti</a>
      </li>
      <li className="sidebar__list__item">
        <a href="#">Escuchado recientemente</a>
      </li>
      <li className="sidebar__list__item">
        <a href="#">Tus Me Gusta</a>
      </li>
    </ul>

    <ul className="sidebar__list">
      <li className="sidebar__list__title">Playlists</li>
      <li className="sidebar__list__item">
        <a href="#">Creada para ti</a>
      </li>
      <li className="sidebar__list__item">
        <a href="#">Escuchado recientemente</a>
      </li>
      <li className="sidebar__list__item">
        <a href="#">Tus Me Gusta</a>
      </li>
    </ul>
  </aside>
);
