import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): DataSourceOptions {
    return {
      type: 'mysql',
      database: 'ediaristas',
      username: 'root',
      password: 'Paiol729',
      host: 'localhost',
      port: 3306,
      synchronize: false,
      entities: [join(__dirname, '..', '**/*entity.{ts,js}')],
      migrations: [join(__dirname, '..', './database/migrations/*{ts, js}')],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
