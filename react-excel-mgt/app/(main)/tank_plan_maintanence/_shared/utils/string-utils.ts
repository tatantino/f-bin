export const StringUtils = {
  extractUsername(email: string | null | undefined): string {
    if (!email) return '';
    return email.split('@')[0];
  },
};
