import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Flex } from '@bitrise/bitkit';

import BuildList from './components/BuildList';
import BuildDetails from './components/BuildDetails';

const App = () => (
  <Flex padding="x12" direction="vertical">
    <Router>
      <Switch>
        <Route path="/apps/:appSlug/builds/:buildSlug">
          <Link to="/">back</Link>
          <BuildDetails />
        </Route>
        <Route path="/">
          <BuildList />
        </Route>
      </Switch>
    </Router>
    <ReactQueryDevtools />
  </Flex>
);

export default App;
