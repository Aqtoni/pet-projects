import Post from "./Post.js";
import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      console.log(req.files);
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();

/* This code is a PostController class which contains methods for creating, getting all, getting one, updating and deleting posts. 
It imports the Post and PostService modules from the same directory. 
The create method takes in a request and response object as parameters and creates a post using the PostService module. 
The getAll method uses the PostService module to get all posts and returns them in a response object. 
The getOne method takes in an id parameter from the request object and uses it to get one post with the PostService module. 
The update method takes in a request body and updates a post with it using the PostService module. 
Finally, the delete method takes in an id parameter from the request object and deletes a post with it using the PostService module. */
