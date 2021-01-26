import { ReactQueryDevtools } from 'react-query-devtools';
import { Flex } from '@bitrise/bitkit';

import BuildList from './components/BuildList';

const App = () => (
  <Flex padding="x12" direction="vertical">
    <BuildList />
    <ReactQueryDevtools />
  </Flex>
);

export default App;
