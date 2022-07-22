import { Injectable } from '@nestjs/common';
import { Track, TrackDocument } from './schemas/track.schema';
import { Comment, CommentDocument } from './schemas/comment.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileService, FileType } from 'src/file/file.service';
/* This code is a service class for a Track model
It has methods for creating, getting, deleting, updating, adding comments to, listening to, and searching for tracks. */
@Injectable()
export class TrackService {
  // Allowed access through this
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  // Create Track
  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
    const track = await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: picturePath,
    });
    return track;
  }

  // Get All Tracks
  async getAll(count = 3, offset = 0): Promise<Track[]> {
    const tracks = await this.trackModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return tracks;
  }

  // Get Track By Id
  async getOne(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id).populate('comments');
    return track;
  }

  // Delete Track by Id
  async delete(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findByIdAndDelete(id);
    return track;
  }

  // Update Track By Id
  async update(id: ObjectId, dto: UpdateTrackDto): Promise<Track> {
    const track = await this.trackModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return track;
  }

  // Add Comment to Track
  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({ ...dto });
    track.comments.push(comment._id);
    await track.save();
    return comment;
  }

  // Set Number of plays
  async listen(id: ObjectId): Promise<Track> {
    const track = await this.trackModel.findById(id);
    track.listens += 1;
    await track.save();
    return track;
  }

  // Search Tracks
  async search(query: string): Promise<Track[]> {
    const tracks = await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
    return tracks;
  }
}
