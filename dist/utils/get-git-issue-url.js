"use no memo";
import { gitUrlParse } from "./git-url-parse";
function getGitIssueUrl({
  repository = "",
  title,
  labels
}) {
  const repo = gitUrlParse(repository);
  if (repo.origin.includes("gitlab")) {
    return `${repo.origin}/${repo.owner}/${repo.name}/-/issues/new?issue[title]=${encodeURIComponent(title)}${labels ? `&issue[description]=/label${encodeURIComponent(` ~${labels}
`)}` : ""}`;
  }
  if (repo.origin.includes("github")) {
    return `${repo.origin}/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(title)}&labels=${labels || ""}`;
  }
  return "#";
}
export {
  getGitIssueUrl
};
