import UserRoute from './users/user.route';
import BoardRoute from './boards/board.route';
import ActionRoute from './actions/action.route';
import express from 'express';


const router = express.Router();

router.use('/users',UserRoute);
router.use('/boards', BoardRoute);
router.use('/actions', ActionRoute);

export default router;