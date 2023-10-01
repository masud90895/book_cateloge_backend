import express from 'express';
import { UserAuthController } from './userAuth.controller';

const router = express.Router();
// sign up
router.post('/signup', UserAuthController.createNewUser);
// login
router.post('/signin', UserAuthController.userLogin);

export const UserAuthRoutes = router;
