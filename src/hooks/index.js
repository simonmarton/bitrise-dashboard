import axios from 'axios';
import { useQuery } from 'react-query';
import camelcaseKeys from 'camelcase-keys';

import { API_BASE_URL, API_TOKEN } from '../config';

export const useBuilds = () =>
  useQuery(
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
