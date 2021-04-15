import React, { Suspense, useContext } from 'react';
import { Context } from './Context';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

function FavPage() {
  const { state, dispatch } = useContext(Context);

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
          /*  this is favourites but not episodes!! */
          episodes={state.favourites}
          favourites={state.favourites}
          toggleFavAction={toggleFavAction}
        />
      </section>
    </Suspense>
  );
}

export default FavPage;
