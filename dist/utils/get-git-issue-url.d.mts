declare function getGitIssueUrl({ repository, title, labels }: {
    repository?: string;
    title: string;
    labels?: string;
}): string;

export { getGitIssueUrl };
