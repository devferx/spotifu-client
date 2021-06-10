import "./styles.css";

export const TopBar = () => {
  return (
    <div className="top-bar bg-gray">
      <div className="search-input">
        <span className="search-input-icon" aria-label="Search Icon"></span>
        <input type="text" placeholder="Artistas, canciones o podcasts" />
      </div>
    </div>
  );
};
