import UserRoute from './users/user.route';
import BoardRoute from './boards/board.route';
import express from 'express';


const router = express.Router();

router.use('/users',UserRoute);
router.use('/boards', BoardRoute);

export default router;