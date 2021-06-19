import { Link } from "react-router-dom";
import "./styles.css";

export const SidebarPlaylistMenu = ({ title, playlists }) => {
  return (
    <ul className="sidebar__list">
      <li className="sidebar__list__title">{title}</li>
      {playlists.map((playlist) => (
        <li key={playlist.id} className="sidebar__list__item">
          <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
        </li>
      ))}
    </ul>
  );
};
