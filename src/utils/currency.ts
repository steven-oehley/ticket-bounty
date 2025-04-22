import { MyBig } from '@/lib/big';

export const toCent = (amount: number) => {
  return MyBig(amount).mul(100).round(2).toNumber();
};

export const fromCent = (amount: number) => {
  return MyBig(amount).div(100).round(2).toNumber();
};

export const toCurrencyFromCent = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    currency: 'ZAR',
    style: 'currency',
  }).format(fromCent(amount));
};
