import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }), // Server can share static files fro the client
    MongooseModule.forRoot(
      'mongodb+srv://Anton:kPd5nLtfHmQkTTII@cluster1.brqyfat.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
