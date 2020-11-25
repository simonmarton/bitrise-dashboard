import { Flex, Text } from '@bitrise/bitkit';

import BuildList from './components/BuildList';

const App = () => (
  <Flex padding="x12" direction="vertical">
    <Text margin="x6" size="x6" textColor="grape-5" weight="bold">
      Builds
    </Text>
    <BuildList />
  </Flex>
);

export default App;
