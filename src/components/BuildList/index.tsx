import React from 'react';

import { useBuilds } from '../../hooks';
import Build from '../Build';
import Loadable from '../Loadable';

const BuildList = () => {
  const { isLoading, isFetching, error, data: builds } = useBuilds();

  if (error) {
    return (
      <>
        <h1>Error</h1>
        <pre>{error.message}</pre>
      </>
    );
  }

  return (
    <Loadable title="Builds" isLoading={isLoading || isFetching}>
      {builds?.map((build) => (
        <Build {...build} key={build.slug} />
      ))}
    </Loadable>
  );
};

export default BuildList;
