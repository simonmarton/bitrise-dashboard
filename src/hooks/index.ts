import { useQuery, queryCache } from 'react-query';

import { Build } from '../models';
import { api } from '../utils';

export const useBuilds = () =>
  useQuery<Build[], Error>('builds', () => api.get<Build[]>('builds'), {
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

export const useBuild = (appSlug: string, buildSlug: string, isPolling = false) =>
  useQuery<Build, Error>(['build', buildSlug], () => api.get<Build>(`apps/${appSlug}/builds/${buildSlug}`), {
    initialData: () => queryCache.getQueryData<Build[]>('builds')?.find(({ slug }) => slug === buildSlug),
    initialStale: true,
    refetchInterval: isPolling && 1000,
  });
