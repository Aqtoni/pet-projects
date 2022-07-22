import Router from "express";
import PostController from "./PostController.js";

const router = new Router();

router.post("/posts", PostController.create);
router.get("/posts", PostController.getAll);
router.get("/posts/:id", PostController.getOne);
router.put("/posts", PostController.update);
router.delete("/posts/:id", PostController.delete);

export default router;

/* This code imports the Router from the Express library and the PostController from the PostController.js file. 
It then creates a new router and sets up routes for creating, getting all, getting one, updating, and deleting posts. */
