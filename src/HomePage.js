import React, { Suspense, useContext, useEffect } from 'react';
import { Context } from './Context';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

function HomePage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
      );
      const json = await data.json();
      dispatch({
        type: 'FETCH_DATA',
        payload: json._embedded.episodes,
      });
    };
    fetchData();
  }, [dispatch]);

  const toggleFavAction = (ep) => {
    const epInFavs = state.favourites.includes(ep);
    if (epInFavs) {
      dispatch({
        type: 'REMOVE_FAV',
        payload: ep.id,
      });
    } else {
      dispatch({
        type: 'ADD_FAV',
        payload: ep,
      });
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="flex flex-wrap">
        <EpisodesList
          episodes={state.episodes}
          favourites={state.favourites}
          toggleFavAction={toggleFavAction}
        />
      </section>
    </Suspense>
  );
}

export default HomePage;
