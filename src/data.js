// Static dummy data for each data source.
// Each source returns a single flat record, like one row from a db table.

const github = {
  id: 501,
  name: 'web-app',
  full_name: 'acme-corp/web-app',
  private: false,
  language: 'TypeScript',
  stargazers_count: 120,
  open_issues_count: 4,
};

const okta = {
  id: '00u1a',
  status: 'ACTIVE',
  login: 'alice@acme.example',
  first_name: 'Alice',
  last_name: 'Johnson',
  last_login: '2026-11-05T09:12:00Z',
};

const aws = {
  instance_id: 'i-0abc1234567890001',
  region: 'us-east-1',
  instance_type: 't3.medium',
  state: 'running',
  name: 'web-1',
  env: 'prod',
};

module.exports = { github, okta, aws };
