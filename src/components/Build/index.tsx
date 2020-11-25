import React from 'react';
import { Flex, Avatar, Text, Card, CardContent, CardDivider, TypeColors } from '@bitrise/bitkit';

const getColorForStatus = (status: string): TypeColors => {
  switch (status) {
    case 'success':
      return 'green-3';
    case 'error':
      return 'red-3';
    case 'in-progress':
      return 'grape-3';
    case 'aborted':
      return 'yellow-3';
    default:
      return 'gray-3';
  }
};

const Build = ({ triggeredAt, statusText, commitMessage, triggeredWorkflow, repository }: any) => (
  <Card direction="horizontal" elevation="x2">
    <CardContent backgroundColor={getColorForStatus(statusText)} paddingHorizontal="x1" />
    <CardDivider />
    <CardContent padding="x2" grow direction="horizontal" alignChildrenHorizontal="between">
      <Flex direction="horizontal" gap="x2">
        <Avatar name={repository.title} url={repository.avatarUrl} borderRadius="x1" size="3rem" />
        <Flex direction="vertical" alignChildrenVertical="middle" gap="x1">
          <Text config="6" textColor="gray-7">
            {repository.owner.name}
          </Text>
          <Text config="7" textColor="black">
            {repository.title}
          </Text>
        </Flex>
      </Flex>
      <Text>{triggeredAt}</Text>
    </CardContent>
  </Card>
);

export default Build;

/*
{
  "repository": {
    "slug": "cc3ccc097925deb0",
    "title": "bitrise-init [CI]",
    "project_type": "android",
    "provider": "github",
    "repo_owner": "bitrise-io",
    "repo_url": "https://github.com/bitrise-io/bitrise-init.git",
    "repo_slug": "bitrise-init",
    "is_disabled": false,
    "status": 1,
    "is_public": false,
    "owner": {
      "account_type": "organization",
      "name": "Bitrise #Core",
      "slug": "26e1bb55524221dd"
    },
    "avatar_url": null
  },
  "triggered_at": "2020-11-24T15:34:26Z",
  "started_on_worker_at": "2020-11-24T15:34:27Z",
  "environment_prepare_finished_at": "2020-11-24T15:34:27Z",
  "finished_at": "2020-11-24T15:38:32Z",
  "slug": "47f0064b3f73f4e7",
  "status": 1,
  "status_text": "success",
  "abort_reason": null,
  "is_on_hold": false,
  "branch": "ACT-1035-Better-error-message-to-Ionic-Capacitor-users",
  "build_number": 1014,
  "commit_hash": "ee1a379faf33ff0276aacf238f28cb53401a1af4",
  "commit_message": "Showing a better error message to Ionic Capacitor users\n\n### Changes\r\n\r\n1. Having cordova.xml is not mandatory anymore for Ionic projects, but if it's missing we show a warning message to the user that atm we only support Ionic Cordova projects.\r\n2. Adding warningsWithRecommendation and errorsWithRecommendation to the not detected projects' output.\r\n\r\nUsers will see the following while trying to add an Ionic Capacitor project:\r\n\r\n![image](https://user-images.githubusercontent.com/5689177/100112461-886ca080-2e6f-11eb-8fa4-9424629e13a9.png)\r\n\r\n",
  "tag": null,
  "triggered_workflow": "primary",
  "triggered_by": "webhook",
  "machine_type_id": "elite",
  "stack_identifier": "linux-docker-android",
  "original_build_params": {
    "commit_hash": "ee1a379faf33ff0276aacf238f28cb53401a1af4",
    "commit_message": "Showing a better error message to Ionic Capacitor users\n\n### Changes\r\n\r\n1. Having cordova.xml is not mandatory anymore for Ionic projects, but if it's missing we show a warning message to the user that atm we only support Ionic Cordova projects.\r\n2. Adding warningsWithRecommendation and errorsWithRecommendation to the not detected projects' output.\r\n\r\nUsers will see the following while trying to add an Ionic Capacitor project:\r\n\r\n![image](https://user-images.githubusercontent.com/5689177/100112461-886ca080-2e6f-11eb-8fa4-9424629e13a9.png)\r\n\r\n",
    "branch": "ACT-1035-Better-error-message-to-Ionic-Capacitor-users",
    "branch_repo_owner": "bitrise-io",
    "branch_dest": "master",
    "branch_dest_repo_owner": "bitrise-io",
    "pull_request_id": 193,
    "pull_request_repository_url": "https://github.com/bitrise-io/bitrise-init.git",
    "pull_request_merge_branch": "pull/193/merge",
    "pull_request_head_branch": "pull/193/head",
    "pull_request_author": "chreno",
    "diff_url": "https://github.com/bitrise-io/bitrise-init/pull/193.diff",
    "commit_paths": null
  },
  "pull_request_id": 193,
  "pull_request_target_branch": "master",
  "pull_request_view_url": "https://github.com/bitrise-io/bitrise-init/pull/193",
  "commit_view_url": "https://github.com/bitrise-io/bitrise-init/commit/ee1a379faf33ff0276aacf238f28cb53401a1af4"
}
*/
