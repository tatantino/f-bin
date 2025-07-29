import { PlanDatabaseService } from './plan-database';
import { VersionDatabaseService } from './version-database';
import { HistoryDatabaseService } from './history-database';

const DatabaseService = {
  ...PlanDatabaseService,
  ...VersionDatabaseService,
  ...HistoryDatabaseService,
};

export default DatabaseService;
