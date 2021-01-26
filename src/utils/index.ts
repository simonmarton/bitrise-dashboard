import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

import { API_BASE_URL, API_TOKEN } from '../config';

export const api = {
  get: <T>(path: string): Promise<T> =>
    axios
      .get(`${API_BASE_URL}/${path}`, {
        headers: { Authorization: API_TOKEN },
      })
      .then((result) => camelcaseKeys(result.data.data, { deep: true })),
};
