import auth from '../middlewares/auth';
import * as controller from './action.controller';
import express from 'express';

const router = express.Router();

router.post('/:id', auth,controller.addAction);
router.get('/delete/:id', auth,controller.deleteAction);
router.put('/:id', auth,controller.updateAction);

export default router;