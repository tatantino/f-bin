import logger from '../utils/logger';

const REQUIRED_ENV_VARS = {
  DATABRICKS_URL: process.env.DATABRICKS_API_URL,
  TOKEN: process.env.DATABRICKS_TOKEN,
  WAREHOUSE_ID: process.env.DATABRICKS_WAREHOUSE_ID,
} as const;

const missingVars = Object.entries(REQUIRED_ENV_VARS)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingVars.length > 0) {
  const errorMessage = `Missing required environment variables: ${missingVars.join(', ')}`;
  logger.error(errorMessage);
  throw new Error(errorMessage);
}

export const DB_CONFIG = {
  DATABRICKS_URL: REQUIRED_ENV_VARS.DATABRICKS_URL,
  TOKEN: REQUIRED_ENV_VARS.TOKEN,
  WAREHOUSE_ID: REQUIRED_ENV_VARS.WAREHOUSE_ID,
  QUERY_TIMEOUT: Number(process.env.NEXT_PUBLIC_QUERY_TIMEOUT) || 30000,
  ENDPOINTS: {
    SQL_STATEMENTS: '/api/2.0/sql/statements',
  },
} as const;
