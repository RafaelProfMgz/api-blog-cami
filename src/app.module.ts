import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './models/users/users.module';
import { PostModule } from './models/post/post.module';
import { AppService } from './app.service';

@Module({
  imports: [UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
