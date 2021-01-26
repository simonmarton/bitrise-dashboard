import React from 'react';
import { Flex, Appear, ProgressSpinner, Text } from '@bitrise/bitkit';

const Loadable: React.FC<{
  title: string;
  isLoading?: boolean;
}> = ({ title, children, isLoading = false }) => (
  <Flex direction="vertical" gap="x4" paddingVertical="x2">
    <Flex direction="horizontal" gap="x2" alignChildrenVertical="middle">
      <Text margin="x6" size="x6" textColor="grape-5" weight="bold">
        {title}
      </Text>
      <Appear animation="Fade" duration="base" visible={isLoading}>
        <ProgressSpinner textColor="violet-3" />
      </Appear>
    </Flex>
    {children}
  </Flex>
);

export default Loadable;
