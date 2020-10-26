import mongoose from 'mongoose';
import catchAsync from '../middlewares/catchAsync';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import Board from './board.model';

export const createBoard = catchAsync(async (req, res) => {
	const { id } = req.user;
	const { name } = req.body;
	const newBoard = new Board({ user: id, name });
	await newBoard.save();
	res.status(201).json({
		msg: 'New board created successfully',
		board: newBoard,
	});
});

export const getBoards = catchAsync(async (req, res) => {
	const page = req.query.page || 1;
	const pageSize = req.query.pageSize || 10;
    const { id } = req.user;
    const totalBoards = await Board.countDocuments({ user: mongoose.Types.ObjectId(id) });
	const boards = await Board.find({ user: mongoose.Types.ObjectId(id) })
		.sort({ createdAt: 1 })
		.limit(pageSize)
        .skip(pageSize * (page-1));
    res.json({ total: totalBoards, totalPage: Math.ceil(totalBoards/pageSize), page, pageSize, boards });
});

export const getBoardById = catchAsync(async (req,res) => {
    const boardId = req.params.id;
    const { id } = req.user;
    const foundBoard = await Board.findOne({ _id: boardId, user: id });
    if (!foundBoard) {
        throw new ErrorHandler(400, 'Board not found');
    }
    res.json({ board: foundBoard });
});

export const deleteBoard = catchAsync(async (req,res) => {
    const boardId = req.params.id;
    const { id } = req.user;
    const foundBoard = await Board.findOne({ _id: boardId, user: id });
    if (!foundBoard) {
        throw new ErrorHandler(400, 'Board not found');
    }
    await Board.deleteOne({ _id: boardId });
    res.json({ msg: 'Delete board successfully'});
});

export const updateBoardName = catchAsync(async (req,res) => {
    const { name } = req.body;
    const boardId = req.params.id;
    const board = await Board.findByIdAndUpdate(boardId, { name });
    if (!board) {
        throw new ErrorHandler(400, 'Board not found');
    }
    res.json({ msg: 'Board has been updated', board });
});
