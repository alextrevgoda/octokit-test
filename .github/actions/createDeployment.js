module.exports = async ({ github, context }) => {
  await github.rest.repos.createDeployment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: context.ref,
    environment: process.env.environment,
  });
};
