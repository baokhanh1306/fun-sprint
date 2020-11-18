import catchAsync from '../middlewares/catchAsync';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import { getProfileInfo } from '../middlewares/googleOAuth';
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

export const googleLogin = catchAsync(async (req,res,next) => {
	const { code } = req.body;
	console.log(code);
	const profile = await getProfileInfo(code);
	const foundUser = await User.findOne({ email: profile.email });
	if (foundUser) {
		const token = await foundUser.generateToken();
		return res.json({ token, email: foundUser.email });
	};
	const user = new User({
		email: profile.email,
		name: profile.name,
		password: profile.email + profile.name,
	});
	await user.save();
	const token = await user.generateToken();

	res.json({ token, email: user.email });
});

export const getUser = (req, res, next) => {
	res.json({  ...req.user });
};
