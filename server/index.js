import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import mongoose from 'mongoose';
import { handleError } from './middlewares/ErrorHandler';
import path from 'path';

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connect to dabase'))
	.catch((error) => console.log(error));
const app = express();

app.use(express.json());

app.use('/api', routes);

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
})

app.use((err, req, res, next) => {
	handleError(err, res);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listen on port ${port}`));
