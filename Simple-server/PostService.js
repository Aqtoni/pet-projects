import Post from "./Post.js";
import fileService from "./fileService.js";
class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Id not specified");
    }
    const post = await Post.findById(id);
    return post;
  }
  async update(post) {
    if (!post._id) {
      throw new Error("Id not specified");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      throw new Error("Id not specified");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();

/* This code is a PostService class which contains methods for creating, getting all, getting one, updating and deleting posts. 
The create method takes two parameters: post and pictures. 
It uses the fileService to save the image and then creates a post with the given data. 
The getAll method retrieves all posts from the Post model. 
The getOne method takes an id as parameter and retrieves one post from the Post model. 
The update method takes a post as parameter and updates it in the Post model. Finally, 
the delete method takes an id as parameter and deletes the corresponding post from the Post model.  */
