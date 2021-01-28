import React, { useEffect, useState } from 'react';
import { Flex, Appear, ProgressSpinner, Text } from '@bitrise/bitkit';

const Loadable: React.FC<{
  title: string;
  isLoading?: boolean;
}> = ({ title, children, isLoading = false }) => {
  const [showIsLoading, setShowIsLoading] = useState(false);

  // Min time to show spinner
  useEffect(() => {
    if (isLoading) {
      setShowIsLoading(isLoading);
    } else {
      const timeout = setTimeout(() => setShowIsLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <Flex direction="vertical" gap="x4" paddingVertical="x2">
      <Flex direction="horizontal" gap="x2" alignChildrenVertical="middle">
        <Text margin="x6" size="x6" textColor="grape-5" weight="bold">
          {title}
        </Text>
        <Appear animation="Fade" duration="base" visible={showIsLoading}>
          <ProgressSpinner textColor="violet-3" />
        </Appear>
      </Flex>
      {children}
    </Flex>
  );
};

export default Loadable;
