import mongoose from 'mongoose';
import catchAsync from '../middlewares/catchAsync';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import Action from './action.model';
import Board from '../boards/board.model';

export const addAction = catchAsync(async (req,res,next) => {
    const { name, type } = req.body;
    const boardId = req.params.id;

    const board = await Board.findById(boardId);
    if (!board) {
        throw new ErrorHandler(400, 'Board not found');
    }

    const action = new Action({ name });
    board[type] = [...board[type], action];
    await board.save();
    res.json({ msg: 'Board has been updated', board });
});

export const deleteAction = catchAsync(async (req,res,next) => {
    const boardId = req.params.id;
    const { actionId, type } = req.query;

    const board = await Board.findById(boardId);
    if (!board) {
        throw new ErrorHandler(400, 'Board not found');
    }
    board[type] = board[type].filter(action => action._id.toString() !== actionId);
    await board.save();
    res.status(200).json({ board: board });
});

export const updateAction = catchAsync(async (req,res,next) => {
    console.log(req.body);
    const boardId = req.params.id;
    const { actionId, type, name } = req.body;

    const board = await Board.findById(boardId);
    if (!board) {
        throw new ErrorHandler(400, 'Board not found');
    }
    console.log(board);
    board[type] = board[type].map(action => {
        if (action._id.toString() === actionId) {
            action.name = name;
        }
        return action;
    });
    await board.save();
    await Action.findByIdAndUpdate(actionId, { name });

    res.json({ msg: 'Update action successfully', board});
})