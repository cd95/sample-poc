// Static dummy data for each data source.
// Each source returns a list of flat records, like rows from a db table.

const github = [
  { id: 501, name: 'web-app', full_name: 'acme-corp/web-app', private: false, language: 'TypeScript', stargazers_count: 120, open_issues_count: 4 },
  { id: 502, name: 'billing-service', full_name: 'acme-corp/billing-service', private: true, language: 'Java', stargazers_count: 8, open_issues_count: 11 },
  { id: 503, name: 'infra', full_name: 'acme-corp/infra', private: true, language: 'HCL', stargazers_count: 3, open_issues_count: 0 },
];

const okta = [
  { id: '00u1a', status: 'ACTIVE', login: 'alice@acme.example', first_name: 'Alice', last_name: 'Johnson', last_login: '2026-11-05T09:12:00Z' },
  { id: '00u1b', status: 'ACTIVE', login: 'bob@acme.example', first_name: 'Bob', last_name: 'Smith', last_login: '2026-11-07T14:40:00Z' },
  { id: '00u1c', status: 'SUSPENDED', login: 'carol@acme.example', first_name: 'Carol', last_name: 'Lee', last_login: '2026-09-21T08:03:00Z' },
];

const aws = [
  { instance_id: 'i-0abc1234567890001', region: 'us-east-1', instance_type: 't3.medium', state: 'running', name: 'web-1', env: 'prod' },
  { instance_id: 'i-0abc1234567890002', region: 'us-east-1', instance_type: 'm5.large', state: 'stopped', name: 'batch-1', env: 'staging' },
  { instance_id: 'i-0abc1234567890003', region: 'eu-west-1', instance_type: 't3.small', state: 'running', name: 'api-eu', env: 'prod' },
];

module.exports = { github, okta, aws };
