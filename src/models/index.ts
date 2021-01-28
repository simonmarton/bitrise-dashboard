export type Build = {
  slug: string;
  triggeredAt: string;
  finishedAt: string;
  statusText: string;
  commitMessage: string;
  triggeredWorkflow: string;
  triggeredBy: string;
  repository: string;
};
