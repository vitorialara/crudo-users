import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

export default new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
});
