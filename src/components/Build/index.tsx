import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Avatar, Text, Card, CardContent, CardDivider, ProgressSpinner } from '@bitrise/bitkit';
import parseISO from 'date-fns/parseISO';
import formatDistance from 'date-fns/formatDistanceStrict';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { getColorForStatus } from '../../utils';

const Build = ({ slug, triggeredAt, finishedAt, statusText, triggeredWorkflow, repository }: any) => (
  <Card direction="horizontal" elevation="x3" Component={Link} to={`/apps/${repository.slug}/builds/${slug}`}>
    <CardContent backgroundColor={getColorForStatus(statusText)} paddingHorizontal="x1" />
    <CardDivider />
    <CardContent padding="x2" grow direction="horizontal" alignChildrenHorizontal="between">
      <Flex direction="horizontal" gap="x2">
        <Avatar name={repository.title} url={repository.avatarUrl} borderRadius="x1" size="3rem" />
        <Flex direction="vertical" alignChildrenVertical="between">
          <Text config="6" textColor="gray-7">
            {repository.owner.name}
          </Text>
          <Text config="7" textColor="black">
            {repository.title} - {triggeredWorkflow}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="vertical" alignChildrenVertical="between" alignChildrenHorizontal="end">
        <Text>Started {formatDistanceToNow(parseISO(triggeredAt), { addSuffix: true })}</Text>
        {finishedAt ? (
          <Text>Finished in {formatDistance(parseISO(triggeredAt), parseISO(finishedAt))}</Text>
        ) : (
          <ProgressSpinner size="1rem" />
        )}
      </Flex>
    </CardContent>
  </Card>
);

export default Build;
