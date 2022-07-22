import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/google', passport.authenticate('google'), (req, res) =>
  res.send(200)
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) =>
  res.send("You are authorized using Google Auth Example!")
);

export default router;
