import { useQuery } from 'react-query';
import { Build } from '../models';
import { api } from '../utils';

export const useBuilds = () =>
  useQuery<Build[], Error>('builds', () => api.get<Build[]>('builds'), {
    refetchOnWindowFocus: false,
  });
