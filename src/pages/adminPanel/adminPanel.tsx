import "./style.scss";

const adminPanel = () => {
  return (
    <section className="admin-panel-conteiner">
      <div className="admin-panel-nav">
        <ul className="admin-panel-nav-list">
          <li className="admin-panel-nav-element">List of All Movies</li>
          <li className="admin-panel-nav-element">List of All TvShows</li>
          <li className="admin-panel-nav-element">Add Movie/TvShow</li>
          <li className="admin-panel-nav-element">Edit Movie/TvShow</li>
          <li className="admin-panel-nav-element">Remove Movie/TvShow</li>
        </ul>
      </div>
    </section>
  );
};

export default adminPanel;
