import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Flex } from '@bitrise/bitkit';
import camelcaseKeys from 'camelcase-keys';

import { API_BASE_URL, API_TOKEN } from '../../config';

import Build from '../Build';

const BuildList = ({ builds }) => {
  const { isLoading, isError, error, data } = useQuery('builds', async () =>
    axios
      .get(`${API_BASE_URL}/builds`, {
        headers: {
          Authorization: API_TOKEN,
        },
      })
      .then((result) => camelcaseKeys(result.data.data, { deep: true }))
  );

  if (isLoading) {
    return <h1>loading</h1>;
  }

  if (isError) {
    return (
      <>
        <h1>Error</h1>
        <pre>{error.message}</pre>
      </>
    );
  }

  return (
    <Flex direction="vertical" gap="x4" paddingVertical="x2">
      {data.map((build) => (
        <Build {...build} key={build.slug} />
      ))}
    </Flex>
  );
};

export default BuildList;
