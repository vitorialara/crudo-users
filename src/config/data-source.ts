import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT) || 5432,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  entities: ['dist/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
});
