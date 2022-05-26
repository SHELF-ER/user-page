import Main from './js/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
