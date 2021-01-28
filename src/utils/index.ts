import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import { TypeColors } from '@bitrise/bitkit';

import { API_BASE_URL, API_TOKEN } from '../config';

export const api = {
  get: <T>(path: string): Promise<T> =>
    axios
      .get(`${API_BASE_URL}/${path}`, {
        headers: { Authorization: API_TOKEN },
      })
      .then((result) => camelcaseKeys(result.data.data, { deep: true })),
};

export const getColorForStatus = (status: string): TypeColors => {
  switch (status) {
    case 'success':
      return 'green-3';
    case 'error':
      return 'red-3';
    case 'in-progress':
      return 'grape-3';
    case 'aborted':
      return 'yellow-3';
    case 'on-hold':
      return 'blue-3';
    default:
      return 'gray-3';
  }
};
