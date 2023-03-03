module.exports = async ({ github, context, core }) => {
  const deployments = await github.rest.repos.listDeployments({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  const searchDeployment = deployments.data.find(
    (deployment) => deployment.environment === process.env.DEPLOYMENT_NAME
  );
  console.log("searchDeployment ? ", searchDeployment);
};
