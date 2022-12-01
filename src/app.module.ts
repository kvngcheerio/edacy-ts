import {
  Inject,
  Module,
  ValidationPipe,
  OnModuleInit,
} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { APP_PIPE, HttpAdapterHost } from '@nestjs/core';
import { GraphQLModule, GraphQLSchemaHost } from '@nestjs/graphql';
import { Application } from 'express';
import { AppController } from './app.controller';
import { config } from './config';
import { ProgramModule } from './programs/program.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { connection } from './database/mongoose/connection';


const graphQLModules = [
  ProgramModule
];

@Module({
  imports: [
    ...graphQLModules,
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: config.isDevelopment,
      playground: config.isDevelopment,
      autoSchemaFile: true,
      include: [...graphQLModules],
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule implements OnModuleInit {
  constructor(
    @Inject(GraphQLSchemaHost) private readonly schemaHost: GraphQLSchemaHost,
    @Inject(HttpAdapterHost) private readonly httpAdapterHost: HttpAdapterHost,
  ) {}

  onModuleInit(): void {
    if (!this.httpAdapterHost) {
      return;
    }
    const { httpAdapter } = this.httpAdapterHost;
    const app: Application = httpAdapter.getInstance();
    const { schema } = this.schemaHost;
    connection
   
  }
}
