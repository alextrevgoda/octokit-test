module.exports = async ({ github, context, core }) => {
  const deployments = await github.rest.repos.listDeployments({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });
  console.log("deployments ? ", deployments);
  // core.exportVariable("author", commit.data.commit.author.email);
};
