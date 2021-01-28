import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parseISO from 'date-fns/parseISO';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Dot, Text, Flex } from '@bitrise/bitkit';

import { getColorForStatus } from '../../utils';

import { useBuild } from '../../hooks';
import Loadable from '../Loadable';

const BuildDetails = () => {
  const { appSlug, buildSlug } = useParams<{ appSlug: string; buildSlug: string }>();

  const [isPolling, setPolling] = useState(false);

  const { data: build, isLoading, isFetching } = useBuild(appSlug, buildSlug, isPolling);

  useEffect(() => {
    if (build) {
      setPolling(['in-progress', 'on-hold'].includes(build.statusText));
    }
  }, [build]);

  return (
    <Loadable title={build?.triggeredWorkflow || 'Loading..'} isLoading={isLoading || isFetching}>
      {build && (
        <>
          <Text>
            Started {formatDistanceToNow(parseISO(build.triggeredAt), { addSuffix: true })} by {build.triggeredBy}
          </Text>
          <Flex direction="horizontal" gap="x1" alignChildrenVertical="middle">
            <Dot size="1rem" backgroundColor={getColorForStatus(build.statusText)} />
            <Text>Status: {build.statusText}</Text>{' '}
          </Flex>

          <pre>{JSON.stringify(build, null, 2)}</pre>
        </>
      )}
    </Loadable>
  );
};

export default BuildDetails;
