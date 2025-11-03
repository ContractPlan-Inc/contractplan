export type DemoDashboardKpi = {
  label: string;
  value: string;
  helper: string;
};

export type DemoRenewal = {
  contract: string;
  owner: string;
  renewalDate: string;
  risk: string;
};

export type DemoSpendCategory = {
  category: string;
  actual: number;
  plan: number;
};

export type DemoMonthlySpend = {
  month: string;
  actual: number;
  plan: number;
};

export type DemoVarianceAlert = {
  contract: string;
  owner: string;
  variance: number;
  nextStep: string;
};

export type DemoProgramHealth = {
  program: string;
  owner: string;
  score: number;
  status: 'On track' | 'Watch' | 'Needs support';
};

export type DemoComplianceItem = {
  item: string;
  due: string;
  status: string;
};

export const demoDashboardKpis: DemoDashboardKpi[] = [
  { label: 'Total committed', value: '$2.78M', helper: '+6% vs last quarter' },
  { label: 'YTD spend', value: '$1.24M', helper: '92% of plan' },
  { label: 'Variance at risk', value: '$182K', helper: 'Across 3 contracts' },
  { label: 'Compliance score', value: '91%', helper: '↑ 4 pts month over month' },
];

export const demoRenewals: DemoRenewal[] = [
  { contract: 'Contract #2045', owner: 'Jordan Thomas', renewalDate: 'Jul 30', risk: 'Missing certificate' },
  { contract: 'Contract #1889', owner: 'Priya Singh', renewalDate: 'Aug 12', risk: 'Budget review' },
  { contract: 'Contract #1933', owner: 'Marcus Bell', renewalDate: 'Aug 28', risk: 'Scope alignment' },
];

export const demoSpendByCategory: DemoSpendCategory[] = [
  { category: 'Infrastructure', actual: 420000, plan: 400000 },
  { category: 'Community programs', actual: 315000, plan: 330000 },
  { category: 'Technology upgrades', actual: 210000, plan: 195000 },
  { category: 'Operations', actual: 180000, plan: 190000 },
];

export const demoMonthlySpend: DemoMonthlySpend[] = [
  { month: 'Mar', actual: 185000, plan: 178000 },
  { month: 'Apr', actual: 198000, plan: 190000 },
  { month: 'May', actual: 205000, plan: 198000 },
  { month: 'Jun', actual: 210000, plan: 202000 },
];

export const demoVarianceAlerts: DemoVarianceAlert[] = [
  {
    contract: 'Contract #1771',
    owner: 'Marcus Bell',
    variance: 0.12,
    nextStep: 'Finance review scheduled for Friday',
  },
  {
    contract: 'Contract #1994',
    owner: 'Priya Singh',
    variance: -0.09,
    nextStep: 'Share under-spend plan with leadership',
  },
  {
    contract: 'Grant #3002',
    owner: 'Sasha Kim',
    variance: 0.03,
    nextStep: 'Monitor weekly until variance resolves',
  },
];

export const demoVarianceHighlights: string[] = [
  'Variance trending down 5 pts vs last quarter after corrective actions.',
  'Infrastructure programs are 12% over plan — mitigation plan in motion.',
  'Community programs tracking 5% under plan, potential to reinvest in outreach.',
];

export const demoPortfolioSummary = {
  totalValue: '$2.78M',
  activeContracts: 14,
  highRiskContracts: 2,
  avgDuration: '27 months',
  renewalsNextQuarter: 6,
  teamResponseTime: 'Under 24 hrs',
};

export const demoProgramHealth: DemoProgramHealth[] = [
  {
    program: 'Housing & infrastructure',
    owner: 'Marcus Bell',
    score: 91,
    status: 'On track',
  },
  {
    program: 'Community partnerships',
    owner: 'Priya Singh',
    score: 86,
    status: 'Watch',
  },
  {
    program: 'Digital services',
    owner: 'Jordan Thomas',
    score: 79,
    status: 'Needs support',
  },
];

export const demoComplianceChecklist: DemoComplianceItem[] = [
  { item: 'FY25 monitoring plan', due: 'Jul 20', status: 'In progress' },
  { item: 'Insurance certificate refresh', due: 'Jul 25', status: 'Pending review' },
  { item: 'Q3 variance briefing', due: 'Aug 02', status: 'Scheduled' },
];

export const demoOverviewHighlights: string[] = [
  'Renewal readiness improved to 91% with two contracts flagged for extra review.',
  'Spend efficiency is stabilizing with only $182K currently at risk.',
  'Average response time on compliance tasks is now under 24 hours.',
];
