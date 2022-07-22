import { ObjectId } from 'mongoose';

// Class will be used to create a new comment object which will contain the username, text, and trackId of the comment.
export class CreateCommentDto {
  readonly username: string;
  readonly text: string;
  readonly trackId: ObjectId;
}
