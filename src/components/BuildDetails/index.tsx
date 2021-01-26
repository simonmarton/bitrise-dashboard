import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBuild } from '../../hooks';
import Loadable from '../Loadable';

const BuildDetails = () => {
  const { appSlug, buildSlug } = useParams<{ appSlug: string; buildSlug: string }>();

  const [isPolling, setPolling] = useState(false);

  const { data: build, ...query } = useBuild(appSlug, buildSlug, isPolling);

  useEffect(() => {
    if (build) {
      setPolling(['in-progress', 'on-hold'].includes(build.statusText));
    }
  }, [build]);

  return (
    <Loadable title={build?.triggeredWorkflow || 'Loading..'}>
      <pre>{JSON.stringify(build, null, 2)}</pre>
    </Loadable>
  );
};

export default BuildDetails;
