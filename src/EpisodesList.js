function EpisodesList(props) {
  const { episodes, favourites, toggleFavAction } = props;

  return episodes.map((ep) => (
    <section className="p-2 w-64" key={ep.id}>
      {ep.image && <img src={ep.image.medium} alt={ep.name} />}
      <div>{ep.name}</div>
      <section>
        <div>
          Season: {ep.season} Number: {ep.number}
        </div>
        <button onClick={() => toggleFavAction(ep)}>
          {favourites.find((fav) => fav.id === ep.id) ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  ));
}

export default EpisodesList;
