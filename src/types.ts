export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'admin';
}

export interface Account {
  id: string;
  userId: string;
  type: 'savings' | 'checking' | 'credit';
  balance: number;
  accountNumber: string;
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
}