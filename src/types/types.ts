// types.ts
export type TestResult = {
    name: string;
    status: 'passed' | 'failed' | 'running';
    message?: string;
  };
  