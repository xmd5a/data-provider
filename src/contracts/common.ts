export type Money = {
  amount: number;
  currency: string;
};

export type Status = 'success' | 'failed' | 'pending';

export type Months = '-1' | '-2' | '-3' | '-4' | '-5' | '-6' | '-7' | '-8' | '-9' | '-10' | '-11' | '-12';

export type ParameterData = {
  key: string;
  value: string;
};

export type Parameters = Array<ParameterData>;
