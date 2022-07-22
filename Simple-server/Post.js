import mongoose from "mongoose";

const Post = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Post", Post);

/* This code creates a Mongoose schema for a Post object. 
The Post object has four properties: author, title, content, and picture. 
The author and title properties are required, while the content and picture properties are optional. 
The schema is then exported as a model called 'Post'. */
