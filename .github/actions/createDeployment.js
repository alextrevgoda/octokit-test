module.exports = async ({ github, context }) => {
  await github.rest.repos.createDeployment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    ref: process.env.GITHUB_SHA,
    environment: process.env.DEPLOYMENT_NAME,
  });
};
