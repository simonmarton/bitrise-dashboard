import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Flex } from '@bitrise/bitkit';

import BuildList from './components/BuildList';

const App = () => (
  <Flex padding="x12" direction="vertical">
    <Router>
      <Switch>
        <Route path="/:buildId">
          <div>build details..</div>
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
