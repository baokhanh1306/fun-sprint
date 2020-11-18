import jwt from 'jsonwebtoken';
import User from '../users/user.model';
import { ErrorHandler } from './ErrorHandler';
import catchAsync from './catchAsync';

export default catchAsync(async (req, res, next) => {
	const token =
		req.header('Authorization') &&
		req.header('Authorization').replace('Bearer ', '');
	if (!token) {
		throw new ErrorHandler(401, 'Not authorized to access');
	}
	const data = jwt.verify(token, process.env.JWT_KEY);
	const user = await User.findOne({ email: data.email, tokens: token });
	if (!user) {
		throw new ErrorHandler(401, 'Not authorized to access');
	}
	req.user = { id: user._id, email: user.email, token };
	req.token = token;
	next();
});


