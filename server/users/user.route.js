import express from 'express';
import auth from '../middlewares/auth';
import { register, login, getUser } from './user.controller';

const router = express.Router();

router.post('/register',register);
router.post('/login', login);
router.get('/me',auth, getUser);

export default router;