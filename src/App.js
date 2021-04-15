import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { Context } from './Context';
import FavPage from './FavPage';
import HomePage from './HomePage';

function App() {
  const { state } = useContext(Context);

  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <header className="p-2 bg-white sticky top-0 flex items-center justify-between border-b border-black">
          <div>
            <h1 className="font-bold">Rick and Monty</h1>
            <p>Pick your favourite episodes</p>
          </div>

          <div>
            <Link className="p-2 hover:underline" to="/">
              Home
            </Link>
            <Link className="p-2 hover:underline" to="/favs">
              Favourites {state.favourites.length}
            </Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favs" component={FavPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
