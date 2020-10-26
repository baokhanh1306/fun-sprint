import express from 'express';
import auth from '../middlewares/auth';
import * as controller from './board.controller';

const router = express.Router();


router.get('/',auth, controller.getBoards);
router.get('/:id',auth, controller.getBoardById);
router.post('/',auth, controller.createBoard);
router.delete('/:id', auth, controller.deleteBoard);
router.put('/:id', auth, controller.updateBoardName);

export default router;