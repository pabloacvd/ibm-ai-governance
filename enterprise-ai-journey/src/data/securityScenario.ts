import type { SecurityScenarioStep } from '../models/types';

export const SECURITY_SCENARIO_STEPS: SecurityScenarioStep[] = [
  {
    id: 'sec-01',
    label: 'User prepares to share content',
    description:
      'An employee copies text from a confidential internal document and prepares to paste it into a public AI service for assistance with summarisation.',
    status: 'idle',
  },
  {
    id: 'sec-02',
    label: 'Content classification active',
    description:
      'Data security controls inspect the clipboard content. The content is matched against classification patterns and identified as sensitive — containing information that is not authorised for external transmission.',
    status: 'active',
  },
  {
    id: 'sec-03',
    label: 'Destination assessed',
    description:
      'The target service is evaluated against the organisation\'s approved AI destinations. The public AI service is not on the approved list and has not been procured through the standard vendor process.',
    status: 'detected',
  },
  {
    id: 'sec-04',
    label: 'Policy evaluated',
    description:
      'The applicable data handling policy is evaluated: sensitive content must not be transmitted to unapproved external AI services. The transmission does not meet the conditions required for an exception.',
    status: 'detected',
  },
  {
    id: 'sec-05',
    label: 'Transmission blocked',
    description:
      'The data security control blocks the transmission. The user receives a clear explanation that the action was stopped because the content and destination combination is outside policy.',
    status: 'blocked',
  },
  {
    id: 'sec-06',
    label: 'Governance evidence recorded',
    description:
      'The detection, policy evaluation, and blocking action are logged as a governance event. This record contributes to audit evidence for data protection compliance and AI usage oversight.',
    status: 'blocked',
  },
];
