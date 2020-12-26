import axios from 'axios';
import { useQuery } from 'react-query';
import camelcaseKeys from 'camelcase-keys';

import { API_BASE_URL, API_TOKEN } from '../config';

export type Build = {
  slug: string;
  triggeredAt: string;
  finishedAt: string;
  statusText: string;
  commitMessage: string;
  triggeredWorkflow: string;
  repository: string;
};

export const useBuilds = () =>
  useQuery<Build[], Error>(
    'builds',
    async () =>
      axios
        .get(`${API_BASE_URL}/builds`, {
          headers: {
            Authorization: API_TOKEN,
          },
        })
        .then((result) => camelcaseKeys(result.data.data, { deep: true })),
    {
      refetchOnWindowFocus: true,
    }
  );
