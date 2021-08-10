import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import "./styles.css";

export const SidebarPlaylistMenu = ({ title, playlists }) => {
  return (
    <ul className="sidebar__list">
      <li className="sidebar__list__title">{title}</li>
      {playlists.map((playlist, i) => (
        <li key={playlist?.id || i} className="sidebar__list__item">
          {playlist === null ? (
            <a href="/">
              <Skeleton />
            </a>
          ) : (
            <NavLink
              activeClassName="active-playlist"
              to={`/playlist/${playlist.id}`}
            >
              {playlist.name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};
