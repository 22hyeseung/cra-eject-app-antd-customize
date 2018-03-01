import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// components
import Counter from 'containers/CounterContainer';
import Login from 'components/Login';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
