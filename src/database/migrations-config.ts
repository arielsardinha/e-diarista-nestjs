import { TypeOrmConfigService } from './typeorm-config';
import { DataSource } from 'typeorm';

const dataBase = new TypeOrmConfigService();
export const dataConfigMigrations = new DataSource(
  dataBase.createTypeOrmOptions(),
);
