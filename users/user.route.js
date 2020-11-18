import express from 'express';
import auth from '../middlewares/auth';
import { register, login, getUser, googleLogin } from './user.controller';

const router = express.Router();

router.post('/register',register);
router.post('/login', login);
router.post('/google', googleLogin);
router.get('/me',auth, getUser);

export default router;