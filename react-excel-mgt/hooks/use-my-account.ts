interface AccountInfo {
  homeAccountId: string;
  environment: string;
  tenantId: string;
  username: string;
  localAccountId: string;
  name: string;
  idTokenClaims?: {
    roles?: string[];
    [key: string]: unknown;
  };
}

const mockAccount: AccountInfo = {
  homeAccountId: 'mock-account-id',
  environment: 'mock-environment',
  tenantId: 'mock-tenant-id',
  username: 'john.doe@company.com',
  localAccountId: 'mock-local-id',
  name: 'John Doe',
  idTokenClaims: {
    roles: ['user'],
  },
};

const useMyAccount = () => {
  const account = mockAccount;

  const logout = () => {
    console.log('Mock logout called');
  };

  return { account, logout };
};

export default useMyAccount;
