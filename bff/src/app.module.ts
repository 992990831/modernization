import path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { TasksModule } from './tasks/tasks.module';

import { TaskMicoServiceAPI } from './tasks/tasks.data-source';

export interface BFEDataSources {
  tasksAPI: TaskMicoServiceAPI;
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
      dataSources: () => ({
        tasksAPI: new TaskMicoServiceAPI()
      }),
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
