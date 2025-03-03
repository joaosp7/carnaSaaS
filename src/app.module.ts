import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from './env/env';
import { CatsModule } from './teste/cat.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_STR), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
