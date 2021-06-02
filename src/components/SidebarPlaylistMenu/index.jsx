import "./styles.css";

export const SidebarPlaylistMenu = ({ title, playlists }) => {
  return (
    <ul className="sidebar__list">
      <li className="sidebar__list__title">{title}</li>
      {playlists.map((playlist) => (
        <li key={playlist.id} className="sidebar__list__item">
          <a
            href={playlist.external_urls.spotify}
            target="_blank"
            rel="noreferrer"
          >
            {playlist.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
