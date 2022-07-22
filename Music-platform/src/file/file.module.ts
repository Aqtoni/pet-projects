import { Module } from '@nestjs/common';
import { FileService } from './file.service';

@Module({
  providers: [FileService],
})
export class FileModule {}
/* Any other modules that import this FileModule will have access to the FileService and its methods.*/
