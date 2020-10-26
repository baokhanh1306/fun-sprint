import catchAsync from '../middlewares/catchAsync';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import User from './user.model';

export const register = catchAsync(async (req, res, next) => {
	const foundUser = await User.findOne({ email: req.body.email });
	if (foundUser) {
		throw new ErrorHandler(400, 'Email has been registered');
	}
	const user = new User(req.body);
	await user.save();
	res.status(201).json({ msg: 'Register successfully' });
});

export const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	const user = await User.findByCredentials(email, password);
	const token = await user.generateToken();

	res.json({ token, email: user.email });
});

export const getUser = (req, res, next) => {
	res.json({  ...req.user });
};