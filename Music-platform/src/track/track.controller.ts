import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { ObjectId } from 'mongoose';
import { UpdateTrackDto } from './dto/update-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

/* This code is a controller for a track service. 
It contains methods for creating, getting, deleting, updating, and adding comments to tracks as well as listening to them. */
@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    console.log(files);
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }
  @Get()
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.trackService.getAll(count, offset);
  }
  @Get('/search')
  search(@Query('query') query: string) {
    return this.trackService.search(query);
  }
  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }
  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }
  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateTrackDto) {
    return this.trackService.update(id, dto);
  }
  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }
  @Post('/listen/:id')
  async listen(@Param('id') id: ObjectId) {
    const track = await this.trackService.listen(id);
    return track;
  }
}
