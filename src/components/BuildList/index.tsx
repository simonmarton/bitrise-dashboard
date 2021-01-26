import React, { useEffect, useState } from 'react';
import { Appear, Flex, Text, ProgressSpinner } from '@bitrise/bitkit';

import { useBuilds } from '../../hooks';
import Build from '../Build';
import Loadable from '../Loadable';

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
        <pre>{query.error?.message}</pre>
      </>
    );
  }

  return (
    <Loadable title="Builds" isLoading={isLoading}>
      {data?.map((build) => (
        <Build {...build} key={build.slug} />
      ))}
    </Loadable>
  );
};

export default BuildList;
