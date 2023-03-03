module.exports = async ({ github, context }) => {
  await github.rest.repos.createDeploymentStatus({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: context.ref,
    environment: process.env.environment,
  });
};
