import { Injectable, OnModuleInit } from '@nestjs/common';
import { AuthService } from './core/services/auth.service';
import { DbUpsert } from './core/services/db-upsert.service';

@Injectable()
export class AppService implements OnModuleInit{
  constructor
  (
    private readonly dbUpsert: DbUpsert
  ) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  onModuleInit() {
    this.dbUpsert.fillQuestionTypesInDB();
  }
}
