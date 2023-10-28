export type IssueStatus = 'resolved' | 'unresolved';

export enum IssueSeverity {
  LOW,
  MEDIUM,
  HIGH,
}

export type Issue = {
  title: string;
  description: string;
  severity: IssueSeverity;
  status: IssueStatus;
};
