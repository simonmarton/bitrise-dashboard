import React, { useEffect, useState } from 'react';
import { Appear, Flex, Text, ProgressSpinner } from '@bitrise/bitkit';

import { useBuilds } from '../../hooks';
import Build from '../Build';

const BuildList = () => {
  const { data, ...query } = useBuilds();

  const [isLoading, setIsLoading] = useState(false);

  // Min time to show spinner
  useEffect(() => {
    if (query.isLoading || query.isFetching) {
      setIsLoading(true);
    } else {
      const timeout = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [query.isLoading, query.isFetching]);

  if (query.isError) {
    return (
      <>
        <h1>Error</h1>
        <pre>{query.error.message}</pre>
      </>
    );
  }

  return (
    <Flex direction="vertical" gap="x4" paddingVertical="x2">
      <Flex direction="horizontal" gap="x2" alignChildrenVertical="middle">
        <Text margin="x6" size="x6" textColor="grape-5" weight="bold">
          Builds
        </Text>
        <Appear animation="Fade" duration="base" visible={isLoading}>
          <ProgressSpinner textColor="violet-3" />
        </Appear>
      </Flex>
      {data?.map((build) => (
        <Build {...build} key={build.slug} />
      ))}
    </Flex>
  );
};

export default BuildList;
